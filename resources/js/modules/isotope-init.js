/**
 * Isotope init
 */

// Isotope container
var elem = document.querySelector('.productList');
var iso = new Isotope( elem, {
  // Isotope options
  itemSelector: '.productCard',
  layoutMode: 'fitRows'
});

// Bind the sort button click
var sortByGroup = document.querySelector('.filtersButtonGroup');
sortByGroup.addEventListener( 'click', function( event ) {
  // Only button clicks
  if ( !matchesSelector( event.target, '.filterButton' ) ) {
    return;
  }
  // Filter by data-filter
  var filterValue = event.target.getAttribute('data-filter');
  iso.arrange({ filter: filterValue });
});

// Change .activeFilter class on buttons
var buttonGroups = document.querySelectorAll('.buttonGroup');
for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
  var buttonGroup = buttonGroups[i];
  radioButtonGroup( buttonGroup );
}

function radioButtonGroup( buttonGroup ) {
  buttonGroup.addEventListener( 'click', function( event ) {
    // Only works with buttons
    if ( !matchesSelector( event.target, '.filterButton' ) ) {
      return;
    }
    buttonGroup.querySelector('.is-checked').classList.remove('activeFilter');
    event.target.classList.add('activeFilter');
  });
}