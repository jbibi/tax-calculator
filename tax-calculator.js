$(document).ready(function() {

	// Hide or Display from toggles or multiple options
	$("#estCivil2").change(function() {
		$("#trabajoC").css('display', 'block');
		if ($("#addConyuge:checked").val() == "on") {
			$("#ingresosC").css('display', 'block');
		}
	});

	$("#estCivil1").change(function() {
		$("#trabajoC").css('display', 'none');
		$("#ingresosC").css('display', 'none');	
	});

	$("#addConyuge").change(function() {
		if ($("#addConyuge:checked").val() == "on") {
			$("#ingresosC").css('display', 'block');
		} else {
			$("#ingresosC").css('display', 'none');
		}
	});

	$("#tieneDeps").change(function() {
		if ($("#tieneDeps:checked").val() == "on") {
			$("#showFullDep").css('display', 'block');
			$("#showPartDep").css('display', 'block');
		} else {
			$("#showFullDep").css('display', 'none');
			$("#showPartDep").css('display', 'none');
		}
	});

	$("#fullDeps").change(function() {
		if ($("#fullDeps:checked").val() == "on") {
			$("#showFullQty").css('display', 'block');
		} else {
			$("#showFullQty").css('display', 'none');
		}
	});

	$("#partDeps").change(function() {
		if ($("#partDeps:checked").val() == "on") {
			$("#showPartQty").css('display', 'block');
		} else {
			$("#showPartQty").css('display', 'none');
		}
	});

	$("#universitario").change(function() {
		if ($("#universitario:checked").val() == "on") {
			$("#clickOnBeca").css('display', 'block');
			if ($("#beca:checked").val() == "on") {
				$("#optAmerFields").css('display', 'block');
				$("#showOptAmerQty").css('display', 'block');
				var amerDepQty = parseInt($("#optAmerDeps").val());
				for (x = 1; x <= amerDepQty; x++) {
					$("#optAmerQty" + x).css('display', 'block');
				}
			}
		} else {
			$("#clickOnBeca").css('display', 'none');
			$("#optAmerFields").css('display', 'none');
			$("#showOptAmerQty").css('display', 'none');
			for (x = 1; x <= 12; x++) {
				$("#optAmerQty" + x).css('display', 'none');
			}
		}
	});

	$("#clickOnBeca").change(function() {
		if ($("#beca:checked").val() == "on") {
			$("#optAmerFields").css('display', 'block');
			$("#showOptAmerQty").css('display', 'block');
			var amerDepQty = parseInt($("#optAmerDeps").val());
			for (x = 1; x <= amerDepQty; x++) {
				$("#optAmerQty" + x).css('display', 'block');
			}
		} else {
			$("#optAmerFields").css('display', 'none');
			$("#showOptAmerQty").css('display', 'none');
			for (x = 1; x <= 12; x++) {
				$("#optAmerQty" + x).css('display', 'none');
			}
		}
	});

	$("#optAmerDeps").change(function() {
		var amerDepQty = parseInt($("#optAmerDeps").val());
			for (x = 1; x <= amerDepQty; x++) {
				$("#optAmerQty" + x).css('display', 'block');
			}
			for (x = amerDepQty + 1; x <= 12; x++) {
				$("#optAmerQty" + x).css('display', 'none');
			}
	});

	$("#tieneIra").change(function() {
		if ($("#tieneIra:checked").val() == "on") {
			$("#entrarIras").css('display', 'block');
		} else {
			$("#entrarIras").css('display', 'none');
		}
	});

	// funcion para sacar totales de la calculadora
	$("#calcular").click(function() {
		var salarioTotal = 0;
		var retencionTotal = 0;
		var deduccionEdad = 0;
		var deduccionDeps = 0;
		var deduccionHipoteca = 0;
		var deduccionPresEst = 0;
		var deduccionDonaciones = 0;
		var deduccionMedico = 0;
		var deduccionIra = 0;
		var deducciones = 0;
		var respContributiva = 0;
		var deduccionVet = 0;
		var estadoCivil = 0;
		var dependientesFull = 0;
		var dependientesPart = 0;


		if ($("#salario").val() !== "") {
		salarioTotal += parseInt($("#salario").val());
		}

		if ($("#retenciones").val() !== "") {
		retencionTotal += parseInt($("#retenciones").val());
		}

		if ($("#salarioC").val() !== "") {
		salarioTotal += parseInt($("#salarioC").val());
		}

		if ($("#retencionesC").val() !== "") {
		retencionTotal += parseInt($("#retencionesC").val());
		}

		if ($("#estCivil1:checked").val()) {
			estadoCivil = 3500;
		} else if ($("#estCivil2:checked").val()) {
			estadoCivil = 7000;
		}

		if ($("#edad:checked").val()) {
			deduccionEdad = 0;
		}

		if ($("#veterano").val() == "No") {
			deduccionVet = 0;
		} else {
			if ($("#veterano").val() == "Yo") {
				deduccionVet = 1500;
			} else if ($("#veterano").val() == "Cónyuge") {
				deduccionVet = 1500;
			} else if ($("#veterano").val() == "Ambos") {
				deduccionVet = 3000;
			}
			// if ($("#veterano").val() == ("Yo" || "Cónyuge")) {
   //              deduccionVet = 1500;
   //          } else if ($("#veterano").val() == "Ambos") {
   //              deduccionVet = 3000;
   //          }
		}

		if ($("#tieneDeps:checked").val()) {
			if ($("#fullDeps:checked").val()) {
				dependientesFull = 2500*parseInt($("#fullDepQty").val());
			} else {
				dependientesFull = 0;
			}
			if ($("#partDeps:checked").val()) {
				dependientesPart = 1250*parseInt($("#partDepQty").val());
			} else {
				dependientesPart = 0;
			}
			deduccionDeps = dependientesPart + dependientesFull;
		}

		if ($("#universitario:checked").val()) {
			if ($("#beca:checked").val()) {
				var optAmerQty1 = 0, optAmerQty2 = 0, optAmerQty3 = 0, optAmerQty4 = 0, optAmerQty5 = 0, optAmerQty6 = 0, optAmerQty7 = 0, optAmerQty8 = 0, optAmerQty9 = 0, optAmerQty10 = 0, optAmerQty11 = 0, optAmerQty12 = 0;
				var optAmerQtys = [];
				var creditoOptAmer = 0;
				var amerDepQty = parseInt($("#optAmerDeps").val());
				for (x = 1; x <= amerDepQty; x++) {
					if ($("#optAmerQty" + x).val() == "") {
						optAmerQtys.push(0);
					} else {
						if (parseInt($("#optAmerQty" + x).val()) > 2000) {
							var over2k = (parseInt($("#optAmerQty" + x).val()) - 2000) * 0.25;
							var credPermitido = (2000 + over2k) * 0.40;
							optAmerQtys.push(credPermitido);
						} else if (parseInt($("#optAmerQty" + x).val()) <= 2000) {
							var credPermitido = (parseInt($("#optAmerQty" + x).val())) * 0.40;
							optAmerQtys.push(credPermitido);
						}
					}
				}
				for (i = 0; i < amerDepQty; i++) {
					creditoOptAmer += optAmerQtys[i]; 
				}	
				console.log("el credito es " + creditoOptAmer);
			} else {
				creditoOptAmer = 0;
			}
		} else {
			var creditoOptAmer = 0;
		}

		if ($("#hipoteca").val() !== "") {
			deduccionHipoteca += parseInt($("#hipoteca").val());
		}

		if ($("#presEst").val() !== "") {
			deduccionPresEst += parseInt($("#presEst").val());
		}

		if ($("#donaciones").val() !== "") {
			deduccionDonaciones += parseInt($("#donaciones").val());
		}

		if ($("#medico").val() !== "") {
			var calculoMedico = parseInt($("#medico").val()) - (salarioTotal * 0.06);
			if (calculoMedico > 0) {
				deduccionMedico = calculoMedico;
			} else {
				deduccionMedico = 0;
			}
			 
		}

		if ($("#tieneIra:checked").val()) {
			var iraPersonal = 0;
			var iraConyuge = 0;
			if ($("#iraPersonal").val() !== "") {
				iraPersonal += parseInt($("#iraPersonal").val());
			}

			if ($("#iraConyuge").val() !== "") {
				iraConyuge += parseInt($("#iraConyuge").val());
			}
			deduccionIra = iraPersonal + iraConyuge;
		}

		var deducciones = estadoCivil + deduccionEdad + deduccionVet + deduccionDeps + deduccionHipoteca + deduccionPresEst + deduccionDonaciones + deduccionMedico + deduccionIra;
		var ingresoBruto = salarioTotal - deducciones;
		var creditos = creditoOptAmer;

		if (ingresoBruto <= 9000) {
			respContributiva = 0;
		} else if (ingresoBruto > 9000 && ingresoBruto <= 25000) {
			respContributiva = 0.07 * (ingresoBruto - 9000);
		} else if (ingresoBruto > 25000 && ingresoBruto <= 41500) {
			respContributiva = 1120 + (0.14 * (ingresoBruto - 25000));
		} else if (ingresoBruto > 41500 && ingresoBruto <= 61500) {
			respContributiva = 3430 + (0.25 * (ingresoBruto - 41500));
		} else if (ingresoBruto > 61500) {
			respContributiva = 8430 + (0.33 * (ingresoBruto - 61500));
		}

		var total = respContributiva - retencionTotal - creditos;

		if (total < 0) {
			$("#pagoOReint").replaceWith('<p id="pagoOReint">' + 'Estimado a Reintegrar: ' + '</p>');
			$("#cantidadPR").replaceWith('<p id="cantidadPR">' + '$' + parseInt(total * -1) +'</p>');
			$("#estimado").css('color', 'green');
		} else if (total > 0) {
			$("#pagoOReint").replaceWith('<p id="pagoOReint">' + 'Estimado a Pagar: ' + '</p>');
			$("#cantidadPR").replaceWith('<p id="cantidadPR">' + '$' + parseInt(total) +'</p>');
			$("#estimado").css('color', 'red');
		} else {
			$("#pagoOReint").replaceWith('<p id="pagoOReint">' + 'Usted no tiene que pagar ni le toca reintegro.' + '</p>');
			$("#cantidadPR").replaceWith('<p id="cantidadPR">' + '</p>');
			$("#estimado").css('color', 'black');
		}

	
		console.log(salarioTotal, ingresoBruto, deducciones, deduccionVet, deduccionIra);
		console.log(respContributiva);
		console.log(total);
	});

});