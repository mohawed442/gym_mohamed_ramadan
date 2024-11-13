
// foods.forEach(ele =>{
//     console.log(ele['name']);   
//     console.log(ele["quantity"]);   
//     console.log(ele["calories"]);   
//     console.log(ele["protein"]);   
     
// })
 

  // رقم عشوائي لاختيار عنصر من المصفوفة milk
  let fods = [];  // مصفوفة لتخزين العناصر المضافة
  let fodsLength = [];  // مصفوفة لتخزين العناصر المضافة
  let totalCalories = 0;  // المجموع الحالي للسعرات الحرارية
  let meal1Name = "Breakfast " , meal2Name = "Lunch"  ,  meal3Name = "Dinner" ;
  let meal1 , meal2 , meal3 ;
  
  
  
  
  window.onload = function() {
      // استرجاع البيانات المخزنة
      const storedResult = localStorage.getItem("resultData");
     
          
      if (storedResult) {
          const resultData = JSON.parse(storedResult);
         
          const result = `
          <h3>النتائج المحفوظة:</h3>
              <p><strong>مؤشر كتلة الجسم (BMI):</strong> ${resultData.bmi}</p>
              <p><strong>احتياجك من السعرات الحرارية اليومية:</strong> ${resultData.calories} سعر حراري</p>
              <p><strong>احتياجك من البروتين:</strong> ${resultData.protein} جرام بروتين</p>
              <p><strong>احتياجك من الدهون:</strong> ${resultData.fat} جرام دهون</p>
              <p><strong>احتياجك من الكربوهيدرات:</strong> ${resultData.carbs} جرام كربوهيدرات</p>
              `;
              // احفظ المحتوى في عنصر HTML (مثال: عنصر #result في HTML)
          document.getElementById("result").innerHTML = result;
          
          // استرجاع فهرس العناصر المخزنة
         
          resetFood(meal1Name , meal1Name , Breakfast)
          resetFood(meal2Name , meal2Name , Lunch)
          resetFood(meal3Name , meal3Name , Dinner)
          
          
      }
  }
  
  
  
      
  function calculate() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const age = parseFloat(document.getElementById("age").value);
      const gender = document.getElementById("gender").value;
      const activityLevel = parseFloat(document.getElementById("activityLevel").value);
  
      // التحقق من المدخلات
      if (isNaN(weight) || isNaN(height) || isNaN(age)) {
          alert("يرجى إدخال كافة البيانات بشكل صحيح.");
          return;
      }
  
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
  
      let BMR;
      if (gender === "male") {
          BMR = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
          BMR = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      const TDEE = BMR * activityLevel;
  
      // تحديد احتياج البروتين بناءً على الوزن
      const protein = 2.2 * weight;  // زيادة البروتين لدعم بناء العضلات
  
      // تحديد السعرات الحرارية بناءً على النشاط
      const calories = TDEE;  // الحفاظ على السعرات الحرارية الطبيعية
  
      // تحديد احتياجات الدهون والكربوهيدرات بناءً على السعرات
      const fatCalories = calories * 0.25;  // حوالي 25% من السعرات يجب أن تأتي من الدهون
      const proteinCalories = protein * 4;  // كل جرام بروتين يحتوي على 4 سعرات حرارية
      const carbCalories = calories - (fatCalories + proteinCalories);  // الكربوهيدرات تأخذ باقي السعرات
  
      const fatGrams = fatCalories / 9;  // كل جرام دهون يحتوي على 9 سعرات حرارية
      const carbGrams = carbCalories / 4;  // كل جرام كربوهيدرات يحتوي على 4 سعرات حرارية
  
     
      calculateCalories(calories)
      // دالة لحساب تقسيم السعرات
      function calculateCalories(totalCalories) {
          // تقسيم السعرات على 3 وجبات
          meal1 = totalCalories * 0.35; // 35% للوجبة الأولى
          meal2 = totalCalories * 0.35; // 35% للوجبة الثانية
          meal3 = totalCalories * 0.30; // 30% للوجبة الثالثة
  
          // طباعة النتيجة
          return {
      meal1: Math.round(meal1),
      meal2: Math.round(meal2),
      meal3: Math.round(meal3)
  };
      }
  
  
      // تخزين النتائج في Local Storage
      const resultData = {
          bmi: bmi.toFixed(2),
          calories: Math.round(calories),
          meal1 : meal1,
          meal2 : meal2,
          meal3 : meal3,
          protein: Math.round(protein),
          fat: Math.round(fatGrams),
          carbs: Math.round(carbGrams)
      };
  
  
      localStorage.setItem("resultData", JSON.stringify(resultData));
  
      // عرض النتيجة بناءً على البيانات المدخلة
      const result = `
          <h3>النتائج:</h3>
          <p><strong>مؤشر كتلة الجسم (BMI):</strong> ${resultData.bmi}</p>
          <p><strong>احتياجك من السعرات الحرارية اليومية:</strong> ${resultData.calories} سعر حراري</p>
          <p><strong>احتياجك من البروتين:</strong> ${resultData.protein} جرام بروتين</p>
          <p><strong>احتياجك من الدهون:</strong> ${resultData.fat} جرام دهون</p>
          <p><strong>احتياجك من الكربوهيدرات:</strong> ${resultData.carbs} جرام كربوهيدرات</p>
      `;
  
      document.getElementById("result").innerHTML = result;
      
  
  
  
      loopCalories(meal1 ,meal1Name, totalCalories , Breakfast )
      loopCalories(meal2 ,meal2Name, totalCalories , Lunch )
      loopCalories(meal3 ,meal3Name, totalCalories , Dinner )
      
  function loopCalories(par , nameFood , naberCalories ,foods ) {
  fodsLength = [] ; 
  fods = [] ;    
  while (true) {
  
  
  if (naberCalories < par) {
  
      let random = Math.floor(Math.random() * foods.length);
      fods.push(foods[random]);  // إضافة عنصر عشوائي من milk إلى fods
      fodsLength.push(random);  // إضافة الفهرس العشوائي إلى fodsLength
  
      naberCalories = 0;  // إعادة تعيين المجموع بعد كل إضافة
      fods.forEach(ele => {
      naberCalories += +ele["calories"];  // حساب مجموع السعرات\
      console.log(  `${par }    TO  ${naberCalories}`);
  
  
  });
      
  } else if (naberCalories > par) {
      
  
          console.log('else');
          console.log(  `${par }    TO  ${naberCalories}`);
          break ;
          }
      
  
  
  localStorage.setItem(nameFood, JSON.stringify(fodsLength));
  }
  
  
  const fodsLeng = localStorage.getItem(nameFood);
      let allResults = '';  // تخزين جميع النتائج هنا
      // إذا كانت هناك بيانات مخزنة
      if (fodsLeng) {
        
              const resDat = JSON.parse(fodsLeng);
              
              // التأكد من أن المصفوفة milk موجودة وأنه يمكن الوصول إلى العناصر
              if (Array.isArray(foods) && foods[resDat[0]]) {
  
                 
                  const title = `
                  <h3>${nameFood}</h3>
                  `;
                  resDat.forEach(ele =>{
                      const result = `
                          
                          <p><strong>اسم الوجبه :</strong> ${JSON.stringify(foods[ele]["name"])}</p>
                          <p><strong>الكميه :</strong> ${JSON.stringify(foods[ele]["quantity"])}</p>
                          <p><strong>السعرات الحراريه:</strong> ${JSON.stringify(foods[ele]["calories"])}</p>
                          <p><strong>البروتين:</strong> ${JSON.stringify(foods[ele]["protein"])}</p>
                          <p><strong>الدهون:</strong> ${JSON.stringify(foods[ele]["fat"])}</p>
                          <p><strong>الكربوهيدرات:</strong> ${JSON.stringify(foods[ele]["carbs"])}</p>
                          <hr>
                      `;
                      allResults += result;  // إضافة النتيجة إلى متغير النتائج
                  })
                  
                  let di1 = document.createElement("div")
                  let di2 = document.createElement("div")
                  di1.classList.add('noo')
  
                  di1.innerHTML = title ;
                  di2.innerHTML = allResults ;
                  document.getElementById("resultt").appendChild(di1);
                  document.getElementById("resultt").appendChild(di2);
  
              
              
              
          } 
          
          
      }
          
      }
      
      document.getElementById("section").classList.add('d-none');
    }
  
  
  function resetFood(par , nameFood , foods) {
  const fodsLeng = localStorage.getItem(par);
      let allResults = '';  // تخزين جميع النتائج هنا
      if (fodsLeng) {
        
              const resDat = JSON.parse(fodsLeng);
              
              // التأكد من أن المصفوفة milk موجودة وأنه يمكن الوصول إلى العناصر
              if (Array.isArray(foods) && foods[resDat[0]]) {
                 const title = `
                  <h3>${nameFood}</h3>
                  `;
                  resDat.forEach(ele =>{
                      const result = `
                          <p><strong>اسم الوجبه :</strong> ${JSON.stringify(foods[ele]["name"])}</p>
                          <p><strong>الكميه :</strong> ${JSON.stringify(foods[ele]["quantity"])}</p>
                          <p><strong>السعرات الحراريه:</strong> ${JSON.stringify(foods[ele]["calories"])}</p>
                          <p><strong>البروتين:</strong> ${JSON.stringify(foods[ele]["protein"])}</p>
                          <p><strong>الدهون:</strong> ${JSON.stringify(foods[ele]["fat"])}</p>
                          <p><strong>الكربوهيدرات:</strong> ${JSON.stringify(foods[ele]["carbs"])}</p>
                          <hr>
                      `;
                      allResults += result;  // إضافة النتيجة إلى متغير النتائج
                  })
                  let di1 = document.createElement("div")
                  let di2 = document.createElement("div")
  
                  di1.classList.add('noo')
  
                  di1.innerHTML = title ;
                  di2.innerHTML = allResults ;
                  document.getElementById("resultt").appendChild(di1);
                  document.getElementById("resultt").appendChild(di2);
  
              
              
              
          } 
          
          
      }
  
  }
  
      
  
  
// "عند وجود بيانات مسجلة في الموقع، لا يفعل شيئًا. أما إذا لم توجد بيانات، يظهر قائمة التسجيل."
  document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('resultData') !== null) {
    } else {
        document.getElementById("section").classList.remove('d-none');
    }
  });
  
  
  
  