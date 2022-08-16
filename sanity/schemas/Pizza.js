export default{
    name:'pizza',
    title:'pizza',
    type:'document',
    fields:[
        {
            name:'image',
            title:'image',
            type:'image',
            options:{
                hotspot:true//editing the image in data base itself
            }
        },
        {
            name:'name',
            title:'name',
            type:'string'
        },
        {
            name:'slug',// for creating unique id for distingush
            title:'slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90 
            }
        },
        {
            name:'price',
            title:'price',
            type:'array',
            of:[{type: 'number'}]
        },
        {
            name:'details',
            title:'details',
            type:'string'   ,
        }
    ]
}