function calcularMolaridad() {
  const moles = parseFloat(document.getElementById("moles").value);
  const volumen = parseFloat(document.getElementById("volumen").value);

  if (isNaN(moles) || isNaN(volumen) || volumen <= 0) {
    document.getElementById("resultadoMolaridad").textContent =
      "⚠️ Ingresa valores válidos";
    return;
  }

  const molaridad = moles / volumen;

  document.getElementById("resultadoMolaridad").textContent =
    `M = ${molaridad.toFixed(3)} mol/L`;
}
function calcularDilucion() {
  const m1 = parseFloat(document.getElementById("m1").value);
  const v1 = parseFloat(document.getElementById("v1").value);
  const m2 = parseFloat(document.getElementById("m2").value);

  if (isNaN(m1) || isNaN(v1) || isNaN(m2) || m2 <= 0) {
    document.getElementById("resultadoDilucion").textContent =
      "⚠️ Ingresa valores válidos";
    return;
  }

  const v2 = (m1 * v1) / m2;

  document.getElementById("resultadoDilucion").textContent =
    `V₂ = ${v2.toFixed(3)} L`;
}
