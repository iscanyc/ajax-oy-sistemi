$('button').on('click', function () {
    const first = $('#first').is(':checked');
    const second = $('#second').is(':checked');
    if (first === second) {
        alert('Bu işlemi gerçekleştirmek için 1 şıkkı seçmelisiniz...')
    } else {
        $.ajax({
            url: "/vote",
            type: "POST",
            dataType: "json",
            data: {first: first, second: second},
            complete: (data) => {
                if (data.statusText === "OK" && data.responseText === "true") {
                    alert('Oylandı')
                } else {
                    alert('oylarken hata oluştu')
                }
            }
        })
    }
});
