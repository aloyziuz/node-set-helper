module.exports = {
    /**
     * perform a set union from 2 array. returns a set object
     * @param {array} a 
     * @param {array} b 
     */
    SetUnion: function(a, b){
        return new Set(a.concat(b));
    }, 
    
    /**
     * perform set intersection. will return common elements of the 2 array
     * @param {array} a 
     * @param {array} b 
     */
    SetIntersection: function(a, b){
        var intermediate = new Set(b);
        return new Set(a.filter(function(x){
            return intermediate.has(x);
        }));
    }, 

    /**
     * perform set difference. will return elements in a that does not exist in b
     * @param {array} a 
     * @param {array} b 
     */
    SetDifference: function(a, b){
        var intermediate = new Set(b);
        return new Set(a.filter(function(x){
            return !intermediate.has(x);
        }));
    }
}