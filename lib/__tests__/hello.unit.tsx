function add(a:number,b:number){
    return a+b;
}
describe('test',()=>{
    it('1 == 1',()=>{
        expect(add(1,2)).toEqual(3);
    });
});