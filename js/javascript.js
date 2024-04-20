$(document).ready(() => {

    const generations = ["1", "1-5", "2"]

    $('.menu-icon').on('click', () => {
        $('body').toggleClass('menu-open')
    })

    $('.filter-option a').on('click', function () {

        var sel = $(this).data('selection')

        $('.filter-option a').removeClass('active')
        $(this).addClass('active')

        if (sel == 0) {
            showAllMembers()
            return
        }

        generations.forEach(value => {
            $(`.gen-${value}-member`).hide()
        })

        $(`.gen-${sel}-member`).show()
    })

    var showAllMembers = () => {
        generations.forEach(value => {
            $(`.gen-${value}-member`).show()
        })
    }
})  