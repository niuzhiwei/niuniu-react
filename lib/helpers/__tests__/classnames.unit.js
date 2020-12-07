import classes from '../classnames'
describe('classes',()=>{
    it('接受1个classname',()=>{
       const result = classes('a')
       expect(result).toEqual('a')
    });
    it('接受2个classname',()=>{
        const result = classes('a','b')
        expect(result).toEqual('a b')
     });
     it('接受undefined',()=>{
        const result = classes('a',undefined)
        expect(result).toEqual('a')
     });
     it('接受各种奇怪值',()=>{
        const result = classes('a',undefined,'中文',false,null)
        expect(result).toEqual('a 中文')
     });
     it('接受0个参数',()=>{
        const result = classes()
        expect(result).toEqual('')
     });
});