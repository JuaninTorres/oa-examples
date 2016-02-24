(function() {

    // Con esto evitamos que se envíen los formularios
    $('form').on('submit', function(e){
        e.preventDefault();
    });

    // Confirm an action before proceeding.
    var confirmAction = function (e) {
        var input = $(this);
        input.prop('disabled', 'disabled');
        e.preventDefault();
        swal({
                title: input.data('confirm'),
                text: input.data('confirm-text'),
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#00a65a",
                confirmButtonText: "OK",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false,
                html: true
            },
            function(isConfirm){
                if(isConfirm) {
                    swal.disableButtons();
                    // input.closest('form').submit();
                    alert('Información enviada correctamente', 'success', 'Ud. ha enviado de manera correcta toda esta información');
                } else {
                    alert('Esta operación se ha cancelado', 'error', 'Ud. ha optado por no enviar esta información');
                }
            }
        );
        input.removeAttr('disabled');
    };

    // Confirmaciones
    $('input[data-confirm], button[data-confirm]').on('click', confirmAction);

    // Sobreescritura de la funcion alert
    window.alert = function() {
        var level = arguments[1] || "info";
        var body = arguments[2] || "";

        return swal({
            title: arguments[0],
            text: body,
            type: level,
            confirmButtonText: "OK",
            html: true
        });
    };

    // Con esto se consigue un scroll suave
    //$('a[href*="#"]:not([href="#"])').click(function() {
    //    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //        var target = $(this.hash);
    //        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //        if (target.length) {
    //            $('html, body').animate({
    //                scrollTop: target.offset().top
    //            }, 1000);
    //            return false;
    //        }
    //    }
    //});
})();
