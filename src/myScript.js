var carLists = [
  {
    name: 'A',
    price: 12
  }, {
    name: 'B',
    price: 2.3
  }, {
    name: 'C',
    price: 1.2
  }, {
    name: 'D',
    price: 12.5
  }, {
    name: 'E',
    price: 22
  }, {
    name: 'F',
    price: 3
  }, {
    name: 'G',
    price: 6
  }, {
    name: 'H',
    price: 7
  }, {
    name: 'I',
    price: 9.2
  }, {
    name: 'G',
    price: 12.2
  }, {
    name: 'K',
    price: 18.3
  }, {
    name: 'L',
    price: 14.2
  }, {
    name: 'M',
    price: 5
  }, {
    name: 'N',
    price: 8
  }
];
var vm = new Vue({
	el:'#car',
  data: {
    carLists: carLists,
    priceFilterList: [{
      label: '小于5万',
      value:'<5'
    },{
      label: '5万-10万',
      value:'5-10'
    },{
      label: '10万-15万',
      value:'10-15'
    },{
      label: '15万-20万',
      value:'15-20'
    }],
    currentPrice: null
  },
  computed: {
    carListsFilter: function(){
      var list = [];
      if(!this.currentPrice) {
        list = this.carLists;
      }
      else if(this.currentPrice.value === "<5") {
        list = this.carLists.filter(function(car){
          return car.price <= 5;
        })
      }
      else if(this.currentPrice.value === '5-10'){
         list = this.carLists.filter(function(car){
          return car.price <= 10 && car.price > 5;
        })       
      }
      else if(this.currentPrice.value === '10-15'){
         list = this.carLists.filter(function(car){
          return car.price <= 15 && car.price > 10;
        })       
      }
      else if(this.currentPrice.value === '15-20'){
         list = this.carLists.filter(function(car){
          return car.price <= 20 && car.price > 15;
        })       
      }      
      return list;
    }
  },
  methods: {
    selectPrice: function(price){
      this.currentPrice = price;
    }
  }
});



















