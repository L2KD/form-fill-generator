$(function () {
    generateFormFill();

    function getConfig(id) {
        return listInputs.find(item => item.id === id);
    }
    $("#form-fill-result").click(function () {
        $(this).select();
    });

    function generateFormFill() {
        const formElement = $("#form-generator");
        if (formElement) {
            formElement.children().remove();
            if (listInputs) {
                for (let i = 0; i < listInputs.length; i++) {
                    const inputItem = listInputs[i];
                    let elementStr = ``;
                    if (inputItem.type === 'select') {
                        const listValue = inputItem.listValue;
                        elementStr = `<div class="input-wrapper" id="${inputItem.id + '-' + 'wrapper'}">
                            <span class="input-label" id="${inputItem.id + '-' + 'label'}">${inputItem.label}</span>
                            <select class="input-g" id="${inputItem.id + '-' + 'select'}" data-item-id="${inputItem.id}">
                        `;
                        for (let j = 0; j < listValue.length; j++) {
                            const selectData = listValue[j];
                            elementStr += `<option value="${selectData.value}">${selectData.text}</option>`;
                        }
                        elementStr += `</select></div>`;
                    } else if (inputItem.type === 'text') {
                        elementStr = `
                        <div class="input-wrapper">
                            <span class="input-label">${inputItem.label}</span>
                            <input class="input-g" id="${inputItem.id + '-' + 'text'}" />
                        </div>`;
                    }

                    formElement.append(elementStr);
                    $("#" + inputItem.id + '-' + 'select').change(function (e) {
                        const itemId = $(this).attr('data-item-id');
                        const config = getConfig(itemId);
                        const wrapperElement = $("#" + inputItem.id + '-' + 'wrapper');
                        if (config && config.textWhenValue === e.target.value) {
                            const listInput = config.listInput;
                            for (let j = 0; j < listInput.length; j++) {
                                const inputElementStr = `<div><span class="input-label">${listInput[j] + ': '}</span><input class="input-g" id="${config.id + '-input-' + j}" /></div>`;
                                wrapperElement.append(inputElementStr);
                            }
                            $("#" + config.id + '-input-' + 0).focus();
                        } else {
                            wrapperElement.children("div").remove();
                        }
                    });
                }
            }
            const buttonElementStr = `<div class="button-wrapper">
                <div class="button-copy" id="button-default">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <span>Defaulted Fail/Found</span>
                </div>
                <div class="button-copy" id="button-copy">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    <span>Copy to Clipboard</span>
                </div>
            </div>`;
            formElement.append(buttonElementStr);

            $("#button-copy").click(function () {
                let resultStr = "";
                for (let i = 0; i < listInputs.length; i++) {
                    const inputItem = listInputs[i];
                    resultStr += inputItem.label;
                    let valueInput = inputItem.valueFormat;
                    if (inputItem.type === 'select') {
                        if (inputItem.listInput && inputItem.listInput.length > 0 && inputItem.textWhenValue === $("#" + inputItem.id + '-select').val()) {
                            for (let j = 0; j < inputItem.listInput.length; j++) {
                                valueInput = valueInput.replaceAll("{" + j + "}", $("#" + inputItem.id + '-input-' + j).val());
                            }
                        } else {
                            valueInput = $("#" + inputItem.id + '-select option:selected').text();
                        }
                    } else if (inputItem.type === 'text') {
                        valueInput = $("#" + inputItem.id + '-text').val();
                    }
                    resultStr += valueInput;
                    if (i < listInputs.length - 1) {
                        resultStr += "\n";
                    }
                }
                $("#form-fill-result").val(resultStr);
                $("#form-fill-result").select();
                navigator.clipboard.writeText(resultStr);
                $("#form-generator-message").css("display", "flex");
                setTimeout(function () {
                    $("#form-generator-message").css("display", "none");
                }, 1000);
            });
            $("#button-default").click(function () {
                for (let i = 0; i < defaultFormValueWithFail.length; i++) {
                    const wrapperElement = $("#" + defaultFormValueWithFail[i].id + '-' + 'wrapper');
                    wrapperElement.children("div").remove();
                    $("#" + defaultFormValueWithFail[i].id + "-select").val(defaultFormValueWithFail[i].defaultValue).change();
                }
                $("#" + defaultFormValueWithFail[0].id + "-input-0").focus();
            })
        }
    }
});
