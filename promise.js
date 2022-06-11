const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
  try{
    const xxi = await promiseTheaterIXX();
    const cgv = await promiseTheaterVGC();
    const allBisokop = [...xxi, ...cgv];//spread

    //filter by emosi
    // Object.filter = (obj, predicate) => 
    //   Object.keys(obj)
    //         .filter( key => predicate(obj[key]) )
    //         .reduce( (res, key) => (res[key] = obj[key], res), {} );

    //const hasil = filterObj(emosi,allBisokop);
    //var filtered = Object.filter(allBisokop, hasil => hasil== 'marah'); 
    let hasil= [] ;
    allBisokop.forEach((Element)=>{
      if(Element.hasil == emosi){
        hasil.push(Element.hasil);
      }
    })
    const jumlah = hasil.length;
    return jumlah;
    
  }catch(rejectMessage){
    console.log(rejectMessage);
  }
};

module.exports = {
  promiseOutput,
};
