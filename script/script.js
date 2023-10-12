$(function () {
    generateFormFill();

    function getConfig(id) {
        return listInputs.find(item => item.id === id);
    }

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
                        const textWhenValue = inputItem.textWhenValue;
                        elementStr = `<div class="input-wrapper" id="${inputItem.id + '-' + 'wrapper'}">
                            <span class="input-label" id="${inputItem.id + '-' + 'label'}"></span>
                            <select class="input-label" id="${inputItem.id + '-' + 'select'}" data-item-id="${inputItem.id}">
                        `;
                        for (let j = 0; j < listValue.length; j++) {
                            const selectData = listValue[j];
                            elementStr += `<option class="input-g" value="${selectData.value}">${selectData.text}</option>`;
                        }
                        elementStr += `</select></div>`;
                    } else if (inputItem.type === 'text') {
                        elementStr = `
                        <div class="input-wrapper">
                            <span class="input-label"></span>
                            <input class="input-g" />
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
                                const inputElementStr = `<div><span>${listInput[j] + ': '}</span><input /></div>`;
                                wrapperElement.append(inputElementStr);
                            }
                            console.log(config);
                            console.log(e);
                        } else {
                            wrapperElement.children("div").remove();
                        }

                    })
                }
            }
        }
    }
});