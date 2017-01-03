Template.menu.onCreated(function () {
    this.subscribe('products');
});
Template.menu.helpers({
    data:function(){
        let getParams = FlowRouter.getParam('type');
        let productData =  Collection.Products.find({type:getParams});
        let data = [];
        productData.forEach(function(obj){
            let photoFile =  Files.findOne(obj.photo);
            obj.picture = photoFile.url();
            console.log(obj);
            data.push(obj);
        });
        return data;
        //console.log(productData.fetch());
    }
});
