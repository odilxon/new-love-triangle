/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var p = preferences;
  var h=0;
  for(var i=0; i<p.length; i++)
    {
      var f = p[i]; // f=2 i=0
      var s = p[f-1]; // s=3 i=2
      var t = p[s-1]; // t=1 i=3
      if((f!=undefined&s!=undefined&t!=undefined)&(f>0&s>0&t>0)&(t-1==i||s-1==i||t==f)) {h++; i++; p[i]=-1; p[f-1]=-1; p[s-1]=-1;}
    }
  return h;
};
