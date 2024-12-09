

class Polygon{
    
    constructor(lengths){
        
        var polygon_perimeter=0;
        
        for(var index in lengths){
            polygon_perimeter+=lengths[index];
        }
        this.my_perimeter=polygon_perimeter;
    }
    
    perimeter(){
        return this.my_perimeter;
    }
    
}