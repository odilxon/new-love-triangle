/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var p = preferences;
  var h=0;
  for(var i=0; i<p.length; i++)
    {
      var f = p[i];
      var s = p[f-1];
      var t = p[s-1];
      if(i==t-1) h++;
    }
  return Math.floor(h/3);
};
