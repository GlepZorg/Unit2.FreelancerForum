document.addEventListener('DOMContentLoaded', () => {
    const freelancerList = document.getElementById('freelancerList');
    const averageStartingPriceDisplay = document.getElementById('averageStartingPrice');
    const names = ['James', 'Noah', 'Oliver', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack'];
    const occupations = ['Dentist', 'Electrician', 'Chef', 'Designer', 'Photographer', 'Consultant', 'Marketer', 'Engineer', 'Artist', 'Nurse'];
  
    let freelancers = [
      { name: 'Alice',
        occupation: 'Writer', 
        startingPrice: 30 },
      { name: 'Bob', 
        occupation: 'Teacher', 
        startingPrice: 50 },
      { name: 'Carol',
        occupation: 'Programmer',
        startingPrice: 70,
     },
    ];
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function createRandomFreelancer() {
      const name = names[getRandomInt(0, names.length - 1)];
      const occupation = occupations[getRandomInt(0, occupations.length - 1)];
      const startingPrice = getRandomInt(20, 100); 
      return { name, occupation, startingPrice };
    }
  
    function updateFreelancerList() {
      freelancerList.innerHTML = ''; 
      freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement('div');
        freelancerDiv.classList.add('freelancer');
        freelancerDiv.innerHTML = `
          <div>${freelancer.name}</div>
          <div>${freelancer.occupation}</div>
          <div>$${freelancer.startingPrice}</div>
        `;
        freelancerList.appendChild(freelancerDiv);
      });
    }
  
    function updateAverageStartingPrice() {
      const total = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
      const average = (total / freelancers.length).toFixed(2);
      averageStartingPriceDisplay.textContent = `The average starting price is $${average}.`;
    }
  
    updateFreelancerList();
    updateAverageStartingPrice();
  
    setInterval(() => {
      const newFreelancer = createRandomFreelancer();
      freelancers.push(newFreelancer);
      updateFreelancerList();
      updateAverageStartingPrice();
    }, 3000); 
  });
  