

<template>
    <div class ='wrap'>
        <div id ='input-container'>
                <input class="e-input" type="text" placeholder="Enter Date" />
            <div class="e-input-group">
                <input class="e-input" name='input' type="text" placeholder="Enter Date"/>
                <span class="e-input-group-icon e-input-popup-date"></span>
            </div>
        </div>
    </div>
</template>
<script>

export default {
   data: function() {
        return { }
    },
    mounted: function() {
        // To get the all input fields and its container.

        let inputElement = document.querySelectorAll('.e-input-group .e-input,.e-float-input.e-input-group input');

        // Add 'e-input-focus' class to the input for achive ripple effect when focus on the input field.

        for (let i = 0; i < inputElement.length; i++) {
            inputElement[i].addEventListener("focus", function () {
                let parentElement = this.parentNode;
                if (parentElement.classList.contains('e-input-in-wrap')) {
                    parentElement.parentNode.classList.add('e-input-focus');
                } else {
                    this.parentNode.classList.add('e-input-focus');
                }
            });
            inputElement[i].addEventListener("blur", function () {
                let parentElement = this.parentNode;
                if (parentElement.classList.contains('e-input-in-wrap')) {
                    parentElement.parentNode.classList.remove('e-input-focus');
                } else {
                    this.parentNode.classList.remove('e-input-focus');
                }
            });
        }

        // Add 'e-input-btn-ripple' class to the icon element for achive ripple effect when click on the icon.

        var inputIcon = document.querySelectorAll('.e-input-group-icon');
        for (let i = 0; i < inputIcon.length; i++) {
            inputIcon[i].addEventListener('mousedown', function () {
                this.classList.add('e-input-btn-ripple');
            });
            inputIcon[i].addEventListener('mouseup', function () {
                let element = this;
                setTimeout(function () {
                    element.classList.remove('e-input-btn-ripple');
                }, 500);
            });
        }
    }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

  .wrap {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px 10px;
    width: 340px;
  }

  #input-container .e-input-group {
    margin: 30px 0;
  }
  .e-input-group-icon:before {
    font-family: e-icons;
  }

  .e-input-group .e-input-group-icon.e-input-popup-date {
    font-size:16px;
  }

  .e-input-group.e-small .e-input-group-icon.e-input-popup-date {
    font-size:14px;
  }

  .e-input-group-icon.e-input-popup-date:before {
    content: "\e901";
  }
</style>



