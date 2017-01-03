Template.dashboard.events({
    'click .breakfast' :function(e){
        let params = {type: "Breakfast"};
        FlowRouter.go('menu',params);
    },
    'click .lunch' :function(e){
        let params = {type: "Lunch"};
        FlowRouter.go('menu',params);
    },
    'click .dinner' :function(e){
        let params = {type: "Dinner"};
        FlowRouter.go('menu',params);
    },
    'click .dessert' :function(e){
        let params = {type: "Dessert"};
        FlowRouter.go('menu',params);
    },
    'click .coffee' :function(e){
        let params = {type: "Coffee"};
        FlowRouter.go('menu',params);
    },
    'click .drink' :function(e){
        let params = {type: "Drink"};
        FlowRouter.go('menu',params);
    }
});