const useId = () =>{
    let random = Math.floor( 1000000000000000 +Math.random() * 1000000000000000).toString();
    return "Farshad-"+random;
}
export default useId;