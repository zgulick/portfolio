(function(){
  var home=document.getElementById('view-home');
  var views=document.querySelectorAll('main.view');
  function route(){
    var h=location.hash.replace('#','');
    var target=(h && document.getElementById('view-'+h)) || home;
    for(var i=0;i<views.length;i++){ views[i].hidden = views[i]!==target; }
    if(target!==home){ window.scrollTo(0,0); }
    else if(h && h!=='top'){ var el=document.getElementById(h); if(el) el.scrollIntoView(); }
    else { window.scrollTo(0,0); }
  }
  window.addEventListener('hashchange',route);
  route();
})();
