// Simple search filter for service cards on the home page
const searchInput = document.getElementById('serviceSearch');
const serviceCards = document.querySelectorAll('.service-card');
const themeToggleBtn = document.getElementById('themeToggle');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.trim().toLowerCase();

    serviceCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      const shouldShow = term === '' || text.includes(term);
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggleBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  });
}

// Simple hover to show medicine list per service card
const medicineData = {
  'Sore Throat': ['Strepsils', 'Betadine Gargle', 'Cepacol Lozenges', 'Chloraseptic Spray', 'Vicks Lozenges', 'Halls', 'Himalaya Koflet', 'Hedera Syrup', 'Tantum Verde', 'Saltwater Gargle'],
  Fever: ['Paracetamol', 'Dolo 650', 'Calpol', 'Crocin', 'Combiflam', 'Ibuprofen', 'Meftal', 'Nimesulide', 'Advil', 'Acetaminophen'],
  'Runny Nose': ['Cetirizine', 'Levocet', 'Allegra', 'Cetzine', 'Loratadine', 'Fexofenadine', 'Phenylephrine', 'Chlorpheniramine', 'Xylometazoline Spray', 'Azelastine Spray'],
  Cough: ['Benadryl', 'Ascoril', 'Dabur Honitus', 'Corex DX', 'Torex', 'Grilinctus', 'Ambroxol', 'Dextromethorphan', 'Guaifenesin', 'Codeine (Rx)'],
  'Sinus Pressure': ['Sinarest', 'Otrivin Nasal Spray', 'Steam Inhalation Mix', 'Sudafed', 'Flixonase Spray', 'Allegra-D', 'Xylometazoline', 'Saline Rinse', 'Montelukast (Rx)', 'Levocetirizine'],
  'Dry Throat': ['Mucinex DM', 'Honey & Lemon Syrup', 'Vicks Cough Drops', 'Warm Tea', 'Glycerin Lozenges', 'Ambroxol Lozenges', 'Saltwater Gargle', 'Herbal Kadha', 'Licorice Lozenges', 'Hydration ORS'],
  'Tiredness / Low Energy': ['Electral ORS', 'Revital H', 'Glucon-D', 'Enerzal', 'ORS-L', 'Vitamin B-Complex', 'Iron Folic Acid', 'Protein Powder', 'Ginseng', 'Electrolyte Tabs'],
  Headache: ['Saridon', 'Disprin', 'Paracetamol', 'Aspirin', 'Ibuprofen', 'Anacin', 'Combiflam', 'Metamizole', 'Sumatriptan (Rx)', 'Caffeine Tabs']
};

serviceCards.forEach((card) => {
  const titleEl = card.querySelector('h3');
  if (!titleEl) return;

  const titleText = titleEl.textContent.trim();
  const meds = medicineData[titleText] || ['Paracetamol'];

  // Create a simple list of medicines
  const list = document.createElement('ul');
  list.className = 'medicine-list';
  meds.forEach((med) => {
    const li = document.createElement('li');
    li.textContent = med;
    list.appendChild(li);
  });

  // Append the list once
  card.appendChild(list);

  // Toggle view on hover
  card.addEventListener('mouseenter', () => {
    card.classList.add('show-list');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('show-list');
  });
});
