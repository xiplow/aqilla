let nilaiList = [];
let no = 1;

document.getElementById('submitButton').addEventListener('click', function() {
  const nim = document.getElementById('nim').value;
  const nama = document.getElementById('nama').value;
  
  const presensiTeori = parseFloat(document.getElementById('presensiTeori').value);
  const tugasTeori = parseFloat(document.getElementById('tugasTeori').value);
  const utsTeori = parseFloat(document.getElementById('utsTeori').value);
  const uasTeori = parseFloat(document.getElementById('uasTeori').value);
  
  const presensiPraktik = parseFloat(document.getElementById('presensiPraktik').value);
  const tugasPraktik = parseFloat(document.getElementById('tugasPraktik').value);
  const utsPraktik = parseFloat(document.getElementById('utsPraktik').value);
  const uasPraktik = parseFloat(document.getElementById('uasPraktik').value);

  const presensiTotal= (presensiTeori+presensiPraktik)/2;
  const tugasTotal= (tugasTeori+tugasPraktik)/2;
  const utsTotal= (utsTeori+utsPraktik)/2;
  const uasTotal= (uasTeori+uasPraktik)/2;
  const nilaiAkhir = (tugasTeori + utsTeori + uasTeori + tugasPraktik + utsPraktik + uasPraktik) / 6;
  let grade;
  if (nilaiAkhir >= 80) {
      grade = 'A';
  } else if (nilaiAkhir >= 70) {
      grade = 'B';
  } else if (nilaiAkhir >= 60) {
      grade = 'C';
  } else if (nilaiAkhir >= 50) {
      grade = 'D';
  } else {
      grade = 'E';
  }

  nilaiList.push({
      no: no++,
      nim,
      nama,
      presensiTotal,
      tugasTotal,
      utsTotal,
      uasTotal,
      nilaiAkhir,
      grade
  });

  updateTable();
  resetForm();
});

document.getElementById('resetButton').addEventListener('click', function() {
  resetForm();
});

document.getElementById('resetTableButton').addEventListener('click', function() {
  nilaiList = [];
  updateTable();
  no = 1;
});

function updateTable() {
  const nilaiTableBody = document.getElementById('nilaiTableBody');
  nilaiTableBody.innerHTML = '';
  nilaiList.forEach(nilai => {
      const row = document.createElement('tr');
      Object.values(nilai).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
      });
      nilaiTableBody.appendChild(row);
  });
}

function resetForm() {
  document.getElementById('nim').value = '';
  document.getElementById('nama').value = '';
  document.getElementById('presensiTeori').value = '';
  document.getElementById('tugasTeori').value = '';
  document.getElementById('utsTeori').value = '';
  document.getElementById('uasTeori').value = '';
  document.getElementById('presensiPraktik').value = '';
  document.getElementById('tugasPraktik').value = '';
  document.getElementById('utsPraktik').value = '';
  document.getElementBy
}