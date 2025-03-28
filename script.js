document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {
        box.addEventListener('click', function () {
            // Toggle the "expanded" class to animate the expansion
            this.classList.toggle('expanded');

            // When box is expanded, set default values for color and size
            if (this.classList.contains('expanded')) {
                const colorSelect = this.querySelector('select[id^="color"]');
                const sizeSelect = this.querySelector('select[id^="size"]');

                colorSelect.addEventListener('change', function () {
                    this.closest('.box').style.backgroundColor = this.value;
                });

                sizeSelect.addEventListener('change', function () {
                    this.closest('.box').style.width = this.value;
                });
            }
        });
    });
});
