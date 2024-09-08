// Professional Hide and Show
const professional_element = document.getElementById('professional_element');
const professional = document.getElementById('professional');
if (professional_element != null && professional != null) {
    professional.addEventListener('click', function handleClick() {
    if (professional_element.style.display === 'none') {
     
        professional_element.style.display = 'block';

        professional.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        professional_element.style.display = 'none';

        professional.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}


//Education  Hide and Show
const education_element = document.getElementById('education_element');
const education = document.getElementById('education');
if (education_element != null && education != null) {
    education.addEventListener('click', function handleClick() {
    if (education_element.style.display === 'none') {
     
        education_element.style.display = 'block';

        education.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        education_element.style.display = 'none';

        education.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}


//Employment  Hide and Show
const employment_element = document.getElementById('employment_element');
const employment = document.getElementById('employment');
if (employment_element != null && employment != null) {
    employment.addEventListener('click', function handleClick() {
    if (employment_element.style.display === 'none') {
     
        employment_element.style.display = 'block';

        employment.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        employment_element.style.display = 'none';

        employment.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}


//Skill  Hide and Show
const skill_element = document.getElementById('skill_element');
const skill = document.getElementById('skill');
if (skill_element != null && skill != null) {
    skill.addEventListener('click', function handleClick() {
    if (skill_element.style.display === 'none') {
     
        skill_element.style.display = 'block';

        skill.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        skill_element.style.display = 'none';

        skill.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}


//Skill  Hide and Show
const languages_element = document.getElementById('languages_element');
const languages = document.getElementById('languages');
if (languages_element != null && languages != null) {
    languages.addEventListener('click', function handleClick() {
    if (languages_element.style.display === 'none') {
     
        languages_element.style.display = 'block';

        languages.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        languages_element.style.display = 'none';

        languages.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}


//Skill  Hide and Show
const hobby_element = document.getElementById('hobby_element');
const hobby = document.getElementById('hobby');
if (hobby_element != null && hobby != null) {
    hobby.addEventListener('click', function handleClick() {
    if (hobby_element.style.display === 'none') {
     
        hobby_element.style.display = 'block';

        hobby.innerHTML = '<i class="fa fa-minus"></i>';
    } else {
      
        hobby_element.style.display = 'none';

        hobby.innerHTML = '<i class="fa fa-plus"></i>';
    }
  });
}