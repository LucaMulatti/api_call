const refreshData = () => {
    let text = 'Hello';
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      text = data.quote;
      document.getElementById('Kquote').innerText = text;
    })
  }
    
  
  document.addEventListener('DOMContentLoaded', () => {
      console.log('DOMContentLoaded');
    refreshData()
  })
  
  document.getElementById('wisdom').addEventListener('click', () => {
      refreshData()
      });