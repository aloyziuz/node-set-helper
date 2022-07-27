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
     * @param {Function} transformFn
     */
    SetIntersection: function(a, b, transformFn){
        var setOfB = new Set(b);
        return new Set(a.filter(function(memberOfA){
            let compareValue = memberOfA;
            if(transformFn){
                compareValue = transformFn(memberOfA);
            }
            return setOfB.has(compareValue);
        }));
    }, 

    /**
     * perform set difference. will return elements in a that does not exist in b
     * @param {array} a 
     * @param {array} b 
     * @param {Function} transformFn
     */
    SetDifference: function(a, b, transformFn){
        var setOfB = new Set(b);
        return new Set(a.filter(function(memberOfA){
            let compareValue = memberOfA;
            if(transformFn){
                compareValue = transformFn(memberOfA);
            }
            return !setOfB.has(memberOfA);
        }));
    }
}