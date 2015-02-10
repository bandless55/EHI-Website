var util = require('util');

exports.increment = function(data){
    return data + 1;
};

exports.ifActive = function(data, context){
    return data == context.data.root.sidebar.index ? "active" : "";
};

exports.getURL = function(context){
    return '/modules/'+context.data.root.sidebar.index;
};



exports.isNumber = function(type, options){
    if(type == 'number')
        return options.fn(this);
};
exports.isRadio = function(type, options){
    if(type == 'radio')
        return options.fn(this);
};



exports.DEBUG = function(data, context){
    console.log('data:\n' + util.inspect(data));
    console.log('context:\n' + util.inspect(context));
};