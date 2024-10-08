let table4 = document.getElementById('table4')



document.addEventListener("DOMContentLoaded", function() {

let toButon = document.querySelectorAll('.toButon')
let DeltaName = document.getElementById('DeltaName')
let sing = document.getElementById('sing')
let addSing = document.getElementById('addSing')
let subscript = document.getElementById('subscript')

let form = document.getElementById('form')
let tbody = document.getElementById('tbody')
let table2 = document.getElementById('table2')

DeltaName.onclick = function () {
  toButon.forEach(ele => {
    ele.classList.remove('active')
  });
  DeltaName.classList.add('active')
  table2.classList.add('d-none')
  tbody.classList.add('d-none')
  form.classList.add('d-none')
  table4.classList.toggle('d-none')
}
addSing.onclick = function () {
  toButon.forEach(ele => {
    ele.classList.remove('active')
  });
  form.classList.toggle('d-none')
  addSing.classList.add('active')
  table4.classList.add('d-none')
  table2.classList.add('d-none')
  tbody.classList.add('d-none')
}
sing.onclick = function () {
  toButon.forEach(ele => {
    ele.classList.remove('active')
  });
  sing.classList.add('active')
  table4.classList.add('d-none')
  table2.classList.add('d-none')
  form.classList.add('d-none')
  tbody.classList.toggle('d-none')
}
subscript.onclick = function () {
  toButon.forEach(ele => {
    ele.classList.remove('active')
  });
  table2.classList.toggle('d-none')
  subscript.classList.add('active')
  tbody.classList.add('d-none')
  table4.classList.add('d-none')
  form.classList.add('d-none')
}
})

let storedData = JSON.parse(localStorage.getItem("arrayData")) || [];
let index = JSON.parse(localStorage.getItem("i")) || 0; 
let reset = document.getElementById('reset')
reset.onclick=function () {
  let mo = confirm("هل تريد عمل اعادة تهيئة للصفحة؟");
  if (mo) {
    localStorage.clear()
    location.reload();
  }else{

  }
 
}




// استرجاع البيانات المخزنة من localStorage أو تهيئة مصفوفة فارغة
let nameM = document.getElementById("name");
let old = document.getElementById("old");
let weigh = document.getElementById("weigh");
let long = document.getElementById("long");
let check = document.getElementById("check");


let arrayData = [...storedData];
let i = index;
let nn= 0 ;

// التعامل مع زر النقر
let button = document.getElementById("button");
button.addEventListener('click', function () {
  names = nameM.value;
  oldYou = old.value;
  weighYou = weigh.value;
  longYou = long.value;

  // إضافة البيانات إلى arrayData
  arrayData[i] = {
    names: names,
    old: oldYou,
    weigh: weighYou,
    longYou: longYou
  };

  // تحديث localStorage
  localStorage.setItem("arrayData", JSON.stringify(arrayData));
  localStorage.setItem("i", JSON.stringify(i + 1)); 

  i++;
});


// إنشاء جدول
let table = document.createElement('table');
table.id = 'table2' 
table.classList.add('table2')
table.style.margin = '100px  auto';

// إنشاء صف العناوين
let headerRow = document.createElement('tr');
headerRow.innerHTML = `
  <th class="p">حذف</th>
  <th class="p">المكسب </th>
  <th class="p">يناير</th>
  <th class="p">ديسمبر</th>
  <th class="p">نوفمبر</th>
  <th class="p">اكتوبر</th>
  <th class="p">سبتمبر</th>
  <th class="p">Name</th>

`;
table.appendChild(headerRow);

// التحقق من وجود بيانات
if (api.length > 0 || storedData.length > 0) {
  api.forEach((item, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td> <input type="button" value="Delta" class="Delta"> </td>
      <td class='price'> </td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="">${item.name}</td>
    `;
    table.appendChild(row);
  });
  // عرض كل كائن في المصفوفة داخل صف في الجدول 
  storedData.forEach((item, index) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td> <input type="button" value="Delta" class="Delta"> </td>
      <td class='price'>  </td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="click"> <p class="clickable" >Click me</p> <p class="close d-none "> Close</p></td>
      <td class="text-danger">${item.names} </td>
      
      
    `;
    let row2 = document.createElement('tr');
    row2.classList.add('text-success')
    row2.innerHTML = `
        <td>${item.old}</td>
        <td>${item.weigh}</td>
        <td>${item.weigh}</td>
        <td>${item.weigh}</td>
        <td>${item.names}</td>
    `;
    tablee.appendChild(row2);
    table.appendChild(row);
  });
 
  
  
} else {
  let noDataRow = document.createElement('tr');
  noDataRow.innerHTML = `<td colspan="5">No data found in localStorage.</td>`;
  table.appendChild(noDataRow);
}

// إضافة الجدول إلى body
document.body.appendChild(table);

// تحميل البيانات من localStorage عند بدء التشغيل
let greenCells = JSON.parse(localStorage.getItem('greenCells')) || [];

let clickable = document.querySelectorAll(".clickable")
let click = document.querySelectorAll(".click")
let close = document.querySelectorAll(".close")


// لتحميل حالة الخلفية المحفوظة من localStorage عند التحميل
document.addEventListener('DOMContentLoaded', function () {
    click.forEach((ele, index) => {
        const storedBackgroundColor = localStorage.getItem(`background-${index}`);
        if (storedBackgroundColor) {
            ele.style.backgroundColor = storedBackgroundColor;
            ele.style.color = 'transparent';
            click[index].classList.add('d');
            close[index].style.color = 'red';
            close[index].classList.remove('d-none');
            clickable[index].classList.add('d-none'); 
        }
    });
});


let n = 0 ;

// الحصول على جميع الصفوف
document.addEventListener('DOMContentLoaded', () => {
  // الحصول على جميع الصفوف
  let tr = document.querySelectorAll('#table2  tr');

  // المرور على كل صف
  tr.forEach(row => {
    // الحصول على جميع عناصر td داخل الصف الحالي
    let tds = row.querySelectorAll('td');

    // المرور على كل عنصر td
    tds.forEach(cell => {

      // التحقق إذا كان العنصر يحتوي على الكلاس 'd'
      if (cell.classList.contains('d')) {
        n++
      } else {
      }
      
    });
    let priceElement = row.querySelector('.price');
    if (priceElement) {
      if (n > 0) {
        priceElement.innerHTML = `${n * 50}`;
        nn = nn + n


      } else {
        priceElement.innerHTML = 0;
      }
    }
    n = 0;
  });
  let noDataRow = document.createElement('tr');
  noDataRow.innerHTML = `
<td colspan="6" id = "total" class="bg-success fs-3 text-black total">${nn * 50}</td>
<td colspan="2" class="bg-success fs-3 text-black">المجموع</td>
  `;
  table.appendChild(noDataRow);

});

clickable.forEach((ele , index) => {
  ele.addEventListener('click', function () {
    click[index].style.backgroundColor = 'green';
    click[index].style.color = 'transparent';
    close[index].style.color = 'red';
    click[index].classList.add('d');
    close[index].classList.remove('d-none');
    clickable[index].classList.add('d-none');
     // الحصول على جميع الصفوف
  let tr = document.querySelectorAll('#table2  tr');

  // المرور على كل صف
  tr.forEach(row => {
    // الحصول على جميع عناصر td داخل الصف الحالي
    let tds = row.querySelectorAll('td');

    // المرور على كل عنصر td
    tds.forEach(cell => {

      // التحقق إذا كان العنصر يحتوي على الكلاس 'd'
      if (cell.classList.contains('d')) {
        n++
      } else {
      }
      
    });
    let priceElement = row.querySelector('.price');
    if (priceElement) {
      if (n > 0) {
        priceElement.innerHTML = `${n * 50}`;

      } else {
        priceElement.innerHTML = 0;
      }
    }
    n = 0;
  });
    localStorage.setItem(`background-${index}`, 'green');
  });
});
close.forEach((ele, index) => {
  ele.addEventListener('click',function () {
    click[index].style.backgroundColor = '';
    click[index].style.color = '';
    close[index].style.color = 'red'; 
    click[index].classList.remove('d');
    close[index].classList.add('d-none');
    clickable[index].classList.remove('d-none');
    localStorage.removeItem(`background-${index}`);

    let priceElement = row.querySelector('.price');
    if (priceElement) {
      if (n > 0) {
        priceElement.innerHTML = `${-50}`;
      } else {
        priceElement.innerHTML = 0;
      }
    }
    n = 0;
  });
});





let headRow = document.createElement('tr');
headRow.classList.add('d')
headRow.innerHTML = `
  <th >حذف</th>
  <th >المكسب </th>
  <th >يناير</th>
  <th >ديسمبر</th>
  <th >نوفمبر</th>
  <th >اكتوبر</th>
  <th >سبتمبر</th>
  <th >Name</th>

`;
table4.appendChild(headRow);

let del = document.querySelectorAll('#table2 .Delta')

del.forEach((ele, index) => {
  ele.addEventListener('click', function () {
    let tr = document.querySelectorAll('tr')[index];
    let tds = tr.querySelectorAll('td');
    
    tds.forEach(ele => {
      ele.classList.remove('d')
    })
        tr.classList.add('d-none')
        let row = ele.closest('tr');
        table4.appendChild(row);
        let rowData = {
        classList: Array.from(row.classList),  
          innerHTML: row.innerHTML
    };
    
        localStorage.setItem(`table-${index}`, JSON.stringify(rowData));    
  })

})





document.addEventListener('DOMContentLoaded', function () {
    // التكرار على جميع عناصر LocalStorage للبحث عن العناصر المخزنة
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith('table-')) {
            let index = key.split('-')[1];
            let rowData = JSON.parse(localStorage.getItem(key));
            
            // إنشاء صف جديد
            let row = document.createElement('tr');
            row.innerHTML = rowData.innerHTML;
            
            // إعادة تعيين الفئات
            row.classList.add(...rowData.classList);
            
            // إضافة الصف إلى الجدول
            table4.appendChild(row);
        } 
    });
});
  
document.addEventListener('DOMContentLoaded', function () {
    del.forEach((ele, index) => {
        const table = localStorage.getItem(`table-${index}`);
      if (table) {
          let tr = document.querySelectorAll('#table2  tr')[index + 1];
          tr.classList.add('d-none')


        }
    });
});




document.addEventListener('DOMContentLoaded', function () {
    let rows = document.querySelectorAll('#table4  .Delta');
    let row = document.querySelectorAll('#table4  tr');
    
    rows.forEach((ele, index) => {
      console.log(index);
      
      ele.addEventListener('click', function () {
        row[index + 1].classList.add('d-none')
        localStorage.removeItem(`table-${index}`);
        console.log('Row clicked:', row);
        
        });
    });
});

