function cuentaAtras() {
  const ahora = new Date();
  const anoNuevo2024 = new Date("2024-01-01 00:00:00");
  const diferencia = anoNuevo2024 - ahora;

  const segundos = 1000;
  const minutos = segundos * 60;
  const horas = minutos * 60;
  const dias = horas * 24;

  var tiempoRestante = diferencia;

  const diasRestantes = Math.floor(tiempoRestante / dias);
  tiempoRestante -= diasRestantes * dias;

  const horasRestantes = Math.floor(tiempoRestante / horas);
  tiempoRestante -= horasRestantes * horas;

  const minutosRestantes = Math.floor(tiempoRestante / minutos);
  tiempoRestante -= minutosRestantes * minutos;

  const segundosRestantes = Math.floor(tiempoRestante / segundos);

  document.getElementById("dias").innerText = diasRestantes;
  document.getElementById("horas").innerText = +horasRestantes;
  document.getElementById("minutos").innerText = +minutosRestantes;
  document.getElementById("segundos").innerText = +segundosRestantes;
}

cuentaAtras();

setInterval(cuentaAtras, 1000);
