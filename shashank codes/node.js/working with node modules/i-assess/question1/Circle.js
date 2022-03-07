let circle = {
    computeArea : function(radius){
        return 3.14 * parseInt(radius) * parseInt(radius);
    },
    computeCircumference : function(radius){
        return 2 * 3.14 * parseInt(radius);
    }
}

module.exports = circle;