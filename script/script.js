$(function () {
    generateFormFill();
    let zoom ;
    let checkStorage = false;

    // initStorage();

    // async function initStorage() {
    //     await chrome.storage.local.get(['zoom'], function(result) {
    //         checkStorage = true;
    //         console.log("acbd");
    //     });
    //
    //     console.log(checkStorage);
    //     if (checkStorage === false) {
    //         chrome.storage.local.set({ 'zoom': 1 });
    //         zoom = 1;
    //     } else {
    //         chrome.storage.local.get(['zoom'], function(result) {
    //             zoom = Number(result.zoom);
    //         });
    //     }
    //     $("#form-generator").css("scale", Number(zoom));
    // }

    function getConfig(id) {
        return listInputs.find(item => item.id === id);
    }
    $("#form-fill-result").click(function () {
        $(this).select();
    });
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
            } else if (inputItem.type === 'search') {
                valueInput = $("#" + inputItem.id + '-search').val();
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
    $("#button-default-fail").click(function () {
        for (let i = 0; i < defaultFormValueWithFail.length; i++) {
            const wrapperElement = $("#" + defaultFormValueWithFail[i].id + '-' + 'wrapper');
            wrapperElement.children("div[name=input-g-wrapper]").remove();
            $("#" + defaultFormValueWithFail[i].id + "-select").val(defaultFormValueWithFail[i].defaultValue).change();
            $("#" + defaultFormValueWithFail[i].id + "-search").val(defaultFormValueWithFail[i].defaultValue);
        }
        $("#" + defaultFormValueWithFail[0].id + "-input-0").focus();
    });
    $("#button-default-pass").click(function () {
        for (let i = 0; i < defaultFormValueWithPass.length; i++) {
            const wrapperElement = $("#" + defaultFormValueWithPass[i].id + '-' + 'wrapper');
            wrapperElement.children("div[name=input-g-wrapper]").remove();
            $("#" + defaultFormValueWithPass[i].id + "-select").val(defaultFormValueWithPass[i].defaultValue).change();
            $("#" + defaultFormValueWithFail[i].id + "-search").val(defaultFormValueWithFail[i].defaultValue).change();
        }
        // $("#" + defaultFormValueWithPass[defaultFormValueWithPass.length - 1].id + "-text").focus();
    });
    $("#button-zoom-in").click(function () {
        $("#form-generator").css("scale", zoom + 0.1);
        zoom += 0.1;
        chrome.storage.local.set({ 'zoom': zoom });
    });
    $("#button-zoom-out").click(function () {
        $("#form-generator").css("scale", zoom - 0.1);
        zoom -= 0.1;
        chrome.storage.local.set({ 'zoom': zoom });
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
                            <div class="input-label"><span>${inputItem.label}</span></div>
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
                            <div class="input-label"><span class="input-label">${inputItem.label}</span></div>
                            <input class="input-g" id="${inputItem.id + '-' + 'text'}" />
                        </div>`;
                    } else if (inputItem.type === 'search') {
                        const listValue = inputItem.listValue;
                        elementStr = `<div class="input-wrapper" id="${inputItem.id + '-' + 'wrapper'}">
                            <div class="input-label"><span class="input-label">${inputItem.label}</span></div>
                            <input class="input-g" list="${inputItem.id + '-' + 'data-list'}" id="${inputItem.id + '-' + 'search'}" data-item-id="${inputItem.id}"><datalist id="${inputItem.id + '-' + 'data-list'}" >
                        `;
                        for (let j = 0; j < listValue.length; j++) {
                            const selectData = listValue[j];
                            elementStr += `<option value="${selectData.text}"></option>`;
                        }
                        elementStr += `</datalist></input></div>`;
                    }

                    formElement.append(elementStr);
                    $("#" + inputItem.id + '-' + 'select').change(function (e) {
                        const itemId = $(this).attr('data-item-id');
                        const config = getConfig(itemId);
                        const wrapperElement = $("#" + inputItem.id + '-' + 'wrapper');
                        if (config && config.textWhenValue === e.target.value) {
                            const listInput = config.listInput;
                            let inputElementStr = `<div name="input-g-wrapper" style="margin-left: 50px;">`;
                            for (let j = 0; j < listInput.length; j++) {
                                inputElementStr += `<div style="margin-top: 5px; display: flex; align-items: center;"><span class="input-label">${listInput[j] + ': '}</span><input class="input-g" id="${config.id + '-input-' + j}" /></div>`;
                            }
                            inputElementStr += `</div>`
                            wrapperElement.append(inputElementStr);
                            $("#" + config.id + '-input-' + 0).focus();
                        } else {
                            wrapperElement.children("div[name=input-g-wrapper]").remove();
                        }
                    });
                }
            }
            // const buttonElementStr = ``;
            // formElement.append(buttonElementStr);
        }
    }
});
