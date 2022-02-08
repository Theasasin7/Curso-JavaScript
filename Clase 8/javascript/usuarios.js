//-----------------------------
$("#completarData").submit((e) => {
    e.preventDefault();
    let loading = false;
    if (!loading) {
        loading = true;
        const data = $("#completarData");
        nombre = data[0].firstElementChild.children[1].value;
        correo = data[0].firstElementChild.children[2].value;
        contra = data[0].firstElementChild.children[3].value;
        direccion = data[0].firstElementChild.children[4].value;
        telefono = data[0].firstElementChild.children[5].value;
        $("main").prepend(
            '<div style="width: 100%"><p style="display: none" id="p-user">Registro realizado!</p><img class="centralizado" id="img-user" src="https://acegif.com/wp-content/uploads/2021/01/bienvnds-m.gif"/></div>'
        );
        $.ajax({
            method: "POST",
            url: "http://localhost:5500/registro",
            data: {
                nombre,
                correo,
                contra,
                direccion,
                telefono,
            },
            success: function (response) {
                if (response === "ok") {
                    $("#p-user").fadeIn("slow", function () {
                        $("#p-user").fadeOut(1700);
                    });
                    $("#img-user").fadeOut("slow", function () {
                        $("#img-user").show();
                        $("#img-user").fadeOut(2700);
                    });
                    $("#p-user").remove;
                    $("#img-user").remove;
                    loading = false;
                }
            },
        });
        for (let i = 0; i < data[0].firstElementChild.children.length - 1; i++) {
            data[0].firstElementChild.children[i].value = "";
        }
    }
});