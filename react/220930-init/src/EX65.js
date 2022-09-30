import styled from 'styled-components';
import grass from './grass.png';

const Circle = styled.div`
    width : 200px;
    height : 200px;
    border-radius: 100px;
    &.c1{
        background-color: cornflowerblue;
    }
    &.c2{
        background-color:dodgerblue;
        position: relative;
        left: 130px;
        top: 30px;
    }
    &.c3{
        background-color:blue;
        position: relative;
        left: 80px;
        top: 80px;
    }
    &.c4{
        background-color:lightblue;
        position: relative;
        left:100px;
    }
    &.c5{
        background-color:cadetblue;
        position: relative;
        left:130px;
        z-index: 9;
    }
    &.w_eye{
        width : 70px;
        height : 70px;
        border-radius: 35px;
        background-color: white;
        position: relative;
        top: 40px;
        left: 50px;
    }
    &.b_eye{
        width : 40px;
        height : 40px;
        border-radius: 20px;
        background-color: black;
        position: relative;
        top:10px
    }
`;
const Grass = styled.img`
    position:relative;
    width: 750px;
    bottom: 50px;
`;


const EX65 = () => {
    return (
        <div style={{height: '500px'}}>
            <Circle className='c1'>
                <Circle className='w_eye'>
                    <Circle className='b_eye'></Circle>
                </Circle>
                <Circle className='c2'>
                    <Circle className='c3'>
                        <Circle className='c4'>
                            <Circle className='c5'></Circle>
                        </Circle>
                    </Circle>
                </Circle>
                <Grass src = {grass} alt="잔디"></Grass>
            </Circle>
        </div>
            
    );
}

export default EX65;