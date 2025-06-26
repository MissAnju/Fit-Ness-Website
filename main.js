const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  }),
  navClose &&
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
const navLink = document.querySelectorAll(".nav__link"),
  linkAction = () => {
    let e = document.getElementById("nav-menu");
    e.classList.remove("show-menu");
  };
navLink.forEach((e) => e.addEventListener("click", linkAction));
const scrollHeader = () => {
  let e = document.getElementById("header");
  this.scrollY >= 50
    ? e.classList.add("bg-header")
    : e.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
const sections = document.querySelectorAll("section[id]"),
  scrollActive = () => {
    let e = window.pageYOffset;
    sections.forEach((l) => {
      let s = l.offsetHeight,
        t = l.offsetTop - 58,
        o = l.getAttribute("id"),
        n = document.querySelector(".nav__menu a[href*=" + o + "]");
      e > t && e <= t + s
        ? n.classList.add("active-link")
        : n.classList.remove("active-link");
    });
  };
window.addEventListener("scroll", scrollActive);
const scrollUp = () => {
  let e = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? e.classList.add("show-scroll")
    : e.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(".home__data, .footer__container, .footer__group"),
  sr.reveal(".home__img", { delay: 700, origin: "bottom" }),
  sr.reveal(".gallery-wrap", { delay: 700, origin: "bottom" }),
  sr.reveal(".button__flex", { delay: 700, origin: "bottom" }),
  sr.reveal(".logos__img, .services__card, .gallery__card", { interval: 100 }),
  sr.reveal(".offer-goals__img", { origin: "left" }),
  sr.reveal(".section__titles", { origin: "left" }),
  sr.reveal(".contact-us__description", { origin: "left" }),
  sr.reveal(".offer-goals__content, .contact-us__img", { origin: "right" });


//   

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from actually submitting
    document.querySelector(".thankyou-message").style.display = "block";
    // You can also clear the form if you want:
    // this.reset();
  });
  
  // 

//   <script> 
//   import { useState } from 'react';

// export default function BMICalculator() {
// const [isOpen, setIsOpen] = useState(false);
// const [height, setHeight] = useState('');
// const [weight, setWeight] = useState('');
// const [age, setAge] = useState('');
// const [gender, setGender] = useState('male');
// const [activityLevel, setActivityLevel] = useState('moderate');
// const [bmiResult, setBmiResult] = useState(null);
// const [bmiCategory, setBmiCategory] = useState('');
// const [dietPlan, setDietPlan] = useState(null);
// const [exercisePlan, setExercisePlan] = useState(null);

// const calculateBMI = () => {
// if (!height || !weight || !age) {
//   alert('Please fill in all fields');
//   return;
// }

// const heightInMeters = parseFloat(height) / 100;
// const weightInKg = parseFloat(weight);
// const bmi = weightInKg / (heightInMeters * heightInMeters);
// setBmiResult(bmi.toFixed(1));

// // Determine BMI category
// let category;
// if (bmi < 18.5) {
//   category = 'underweight';
// } else if (bmi >= 18.5 && bmi < 25) {
//   category = 'normal';
// } else if (bmi >= 25 && bmi < 30) {
//   category = 'overweight';
// } else {
//   category = 'obese';
// }
// setBmiCategory(category);

// // Generate diet plan based on BMI category
// generateDietPlan(category, gender, age, activityLevel);

// // Generate exercise plan based on BMI category
// generateExercisePlan(category, gender, age, activityLevel);
// };

// const generateDietPlan = (category, gender, age, activityLevel) => {
// const plans = {
//   underweight: {
//     title: "Diet Plan for Weight Gain",
//     desc: "Focus on nutrient-dense foods with a caloric surplus of 300-500 calories daily.",
//     meals: [
//       "Breakfast: Oatmeal with nuts, seeds, fruits, and protein powder",
//       "Mid-morning: Smoothie with banana, protein powder, and peanut butter",
//       "Lunch: Rice or pasta with lean protein and vegetables",
//       "Snack: Greek yogurt with honey and nuts",
//       "Dinner: Protein-rich meal with complex carbs and healthy fats",
//       "Before bed: Protein shake or cottage cheese with fruits"
//     ],
//     tips: [
//       "Eat regularly - aim for 5-6 meals daily",
//       "Include protein in every meal (target 1.6-2g per kg of body weight)",
//       "Focus on nutrient-dense carbohydrates like whole grains, fruits, and starchy vegetables",
//       "Include healthy fats from sources like avocados, nuts, and olive oil"
//     ]
//   },
//   normal: {
//     title: "Diet Plan for Maintenance",
//     desc: "Focus on balanced nutrition to maintain your healthy weight.",
//     meals: [
//       "Breakfast: Whole grain toast with eggs and avocado",
//       "Mid-morning: Fresh fruits with a handful of nuts",
//       "Lunch: Salad with lean protein, grains, and olive oil dressing",
//       "Snack: Greek yogurt or vegetables with hummus",
//       "Dinner: Grilled fish or lean meat with vegetables and quinoa"
//     ],
//     tips: [
//       "Maintain a balanced diet with proper portions",
//       "Include a variety of colorful vegetables and fruits daily",
//       "Choose whole grains over refined carbohydrates",
//       "Stay hydrated with at least 8 glasses of water daily"
//     ]
//   },
//   overweight: {
//     title: "Diet Plan for Weight Loss",
//     desc: "Focus on nutrient-dense foods with a modest caloric deficit of 300-500 calories daily.",
//     meals: [
//       "Breakfast: Greek yogurt with berries and a small amount of granola",
//       "Mid-morning: Apple or pear with a small handful of almonds",
//       "Lunch: Large salad with lean protein and light dressing",
//       "Snack: Carrot sticks with hummus",
//       "Dinner: Grilled chicken or fish with plenty of vegetables and small portion of whole grains"
//     ],
//     tips: [
//       "Focus on portion control and mindful eating",
//       "Fill half your plate with vegetables at lunch and dinner",
//       "Limit processed foods, added sugars, and refined carbs",
//       "Stay hydrated and avoid sugary drinks"
//     ]
//   },
//   obese: {
//     title: "Diet Plan for Significant Weight Loss",
//     desc: "Focus on whole foods with higher protein intake and moderate caloric deficit of 500-750 calories daily.",
//     meals: [
//       "Breakfast: Egg white omelet with vegetables",
//       "Mid-morning: Protein shake with berries",
//       "Lunch: Large green salad with grilled chicken and olive oil/vinegar dressing",
//       "Snack: Celery with a tablespoon of almond butter",
//       "Dinner: Lean protein with steamed vegetables and small portion of whole grains"
//     ],
//     tips: [
//       "Prioritize protein (aim for 1.5-2g per kg of body weight)",
//       "Eliminate sugary beverages and desserts",
//       "Focus on whole, unprocessed foods",
//       "Consider consulting a registered dietitian",
//       "Stay hydrated with at least 10 glasses of water daily"
//     ]
//   }
// };

// setDietPlan(plans[category]);
// };

// const generateExercisePlan = (category, gender, age, activityLevel) => {
// const plans = {
//   underweight: {
//     title: "Exercise Plan for Building Muscle",
//     desc: "Focus on strength training with adequate recovery to build muscle mass.",
//     weekly: [
//       "3-4 days of strength training",
//       "1-2 days of light cardio (20-30 minutes)",
//       "2-3 rest days for recovery"
//     ],
//     exercises: [
//       "Compound movements: Squats, deadlifts, bench press, rows, shoulder press",
//       "Focus on progressive overload - gradually increasing weights",
//       "Aim for 8-12 reps for muscle growth",
//       "Include protein intake within 30 minutes after workout"
//     ]
//   },
//   normal: {
//     title: "Balanced Exercise Plan",
//     desc: "Maintain fitness with a mix of cardio, strength, and flexibility work.",
//     weekly: [
//       "2-3 days of strength training",
//       "2-3 days of moderate cardio (30-45 minutes)",
//       "1-2 days of flexibility or mobility work",
//       "At least 1 full rest day"
//     ],
//     exercises: [
//       "Strength: Mix of bodyweight exercises and weighted movements",
//       "Cardio: Jogging, cycling, swimming, or brisk walking",
//       "Flexibility: Yoga or dedicated stretching sessions",
//       "Consider adding recreational sports or activities you enjoy"
//     ]
//   },
//   overweight: {
//     title: "Exercise Plan for Weight Management",
//     desc: "Balance cardio and strength training to burn calories and preserve muscle.",
//     weekly: [
//       "3-4 days of moderate cardio (30-45 minutes)",
//       "2-3 days of strength training",
//       "1 active recovery day (light walking or yoga)",
//       "1 rest day"
//     ],
//     exercises: [
//       "Cardio: Walking, jogging, cycling, swimming, or elliptical",
//       "Strength: Full-body circuit training with moderate weights",
//       "Consider HIIT workouts 1-2 times per week for efficient calorie burning",
//       "Focus on consistency rather than intensity at first"
//     ]
//   },
//   obese: {
//     title: "Exercise Plan for Beginners",
//     desc: "Start with low-impact activities and gradually increase intensity.",
//     weekly: [
//       "5-7 days of walking (start with 10-15 minutes, build to 30+ minutes)",
//       "2-3 days of light strength training",
//       "Focus on consistency and building the exercise habit"
//     ],
//     exercises: [
//       "Walking: The best exercise to start with - try to increase steps daily",
//       "Water exercises: Swimming or water aerobics for joint-friendly cardio",
//       "Strength: Begin with bodyweight or resistance band exercises",
//       "Always warm up and cool down properly",
//       "Consider working with a fitness professional for proper form"
//     ]
//   }
// };

// setExercisePlan(plans[category]);
// };

// return (
// <div className="flex flex-col items-center p-6 max-w-3xl mx-auto">
//   {!isOpen ? (
//     <button 
//       onClick={() => setIsOpen(true)}
//       className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transition-colors"
//     >
//       Open BMI Calculator
//     </button>
//   ) : (
//     <div className="w-full bg-white rounded-lg shadow-xl p-6">
//       <h2 className="text-2xl font-bold text-center mb-6">BMI Calculator</h2>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Height (cm)</label>
//           <input
//             type="number"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., 170"
//           />
//         </div>
        
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Weight (kg)</label>
//           <input
//             type="number"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., 70"
//           />
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., 30"
//           />
//         </div>
        
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Gender</label>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
        
//         <div>
//           <label className="block text-gray-700 font-semibold mb-2">Activity Level</label>
//           <select
//             value={activityLevel}
//             onChange={(e) => setActivityLevel(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="sedentary">Sedentary</option>
//             <option value="light">Lightly Active</option>
//             <option value="moderate">Moderately Active</option>
//             <option value="active">Very Active</option>
//             <option value="extreme">Extremely Active</option>
//           </select>
//         </div>
//       </div>
      
//       <div className="flex justify-between mb-6">
//         <button 
//           onClick={() => setIsOpen(false)}
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
//         >
//           Close
//         </button>
        
//         <button 
//           onClick={calculateBMI}
//           className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
//         >
//           Calculate BMI
//         </button>
//       </div>
      
//       {bmiResult && (
//         <div className="mt-8">
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
//             <h3 className="text-xl font-bold text-center mb-4">Your Results</h3>
//             <div className="flex justify-center items-center mb-4">
//               <div className="text-center">
//                 <div className="text-4xl font-bold text-blue-600">{bmiResult}</div>
//                 <div className="text-sm text-gray-600 mt-1">Your BMI</div>
//               </div>
//             </div>
//             <p className="text-center">
//               You are classified as <span className="font-bold capitalize">{bmiCategory}</span>
//             </p>
//           </div>
          
//           {dietPlan && (
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold mb-4">{dietPlan.title}</h3>
//               <p className="mb-4 text-gray-700">{dietPlan.desc}</p>
              
//               <h4 className="text-xl font-semibold mb-2">Recommended Meal Structure</h4>
//               <ul className="list-disc pl-6 mb-4">
//                 {dietPlan.meals.map((meal, index) => (
//                   <li key={index} className="mb-1">{meal}</li>
//                 ))}
//               </ul>
              
//               <h4 className="text-xl font-semibold mb-2">Diet Tips</h4>
//               <ul className="list-disc pl-6 mb-4">
//                 {dietPlan.tips.map((tip, index) => (
//                   <li key={index} className="mb-1">{tip}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
          
//           {exercisePlan && (
//             <div>
//               <h3 className="text-2xl font-bold mb-4">{exercisePlan.title}</h3>
//               <p className="mb-4 text-gray-700">{exercisePlan.desc}</p>
              
//               <h4 className="text-xl font-semibold mb-2">Weekly Plan</h4>
//               <ul className="list-disc pl-6 mb-4">
//                 {exercisePlan.weekly.map((item, index) => (
//                   <li key={index} className="mb-1">{item}</li>
//                 ))}
//               </ul>
              
//               <h4 className="text-xl font-semibold mb-2">Recommended Exercises</h4>
//               <ul className="list-disc pl-6">
//                 {exercisePlan.exercises.map((exercise, index) => (
//                   <li key={index} className="mb-1">{exercise}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   )}
// </div>
// );
// }
// </script>
