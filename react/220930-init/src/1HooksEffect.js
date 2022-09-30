import {useState, useEffect} from 'react';
 
const Hook = () => {
    const [name, setName] = useState('');
    const [cnt, setCnt] = useState(0);

    const changeName = e => {
        setName(e.target.value);
    }
    const changeCnt = () => {
        setCnt( cnt + 1 );
    }
    // useEffect(()=> {
    //     console.log('useEffect');
    //     console.log("name : ", name);
    //     console.log("cnt : ", cnt);
    // }, [name, cnt]);
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.name != this.state.name ){
    //         //실행
    //     }
    // }
    useEffect(() => { //업데이트 이후 실행
        console.log('name1 : ', name);
        return () => {
            console.log('name2 : ', name); // 업데이트 이전 먼저 실행 하는 함수
        }
    })

    return (
        <div>
            <div>
                <input value={name} onChange={changeName} />
                <button onClick={changeCnt}>+1버튼</button>
            </div>
            <h3>이름 : {name}</h3>
            <h4>횟수 : {cnt}</h4>
        </div>
    );
}

export default Hook;