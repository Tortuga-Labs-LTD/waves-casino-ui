import { React, useRef } from 'react'
import styles from  './TableLayout.module.css';


const TableLayout = (props) => {
	const _0 = useRef();
	const _1 = useRef();
	const _2 = useRef();
	const _3 = useRef();
	const _4 = useRef();
	const _5 = useRef();
	const _6 = useRef();
	const _7 = useRef();
	const _8 = useRef();
	const _9 = useRef();
	const _10 = useRef();
	const _11 = useRef();
	const _12 = useRef();
	const _13 = useRef();
	const _14 = useRef();
	const _15 = useRef();
	const _16 = useRef();
	const _17 = useRef();
	const _18 = useRef();
	const _19 = useRef();
	const _20 = useRef();
	const _21 = useRef();
	const _22 = useRef();
	const _23 = useRef();
	const _24 = useRef();
	const _25 = useRef();
	const _26 = useRef();
	const _27 = useRef();
	const _28 = useRef();
	const _29 = useRef();
	const _30 = useRef();
	const _31 = useRef();
	const _32 = useRef();
	const _33 = useRef();
	const _34 = useRef();
	const _35 = useRef();
	const _36 = useRef();

	const handleMouseEnter = (value) => {
		const valueList = value.split('-');
		if (valueList.includes('0')) triggerGreen(_0)
		if (valueList.includes('1')) triggerRed(_1)
		if (valueList.includes('2')) triggerBlack(_2)
		if (valueList.includes('3')) triggerRed(_3)
		if (valueList.includes('4')) triggerBlack(_4)
		if (valueList.includes('5')) triggerRed(_5)
		if (valueList.includes('6')) triggerBlack(_6)
		if (valueList.includes('7')) triggerRed(_7)
		if (valueList.includes('8')) triggerBlack(_8)
		if (valueList.includes('9')) triggerRed(_9)
		if (valueList.includes('10')) triggerBlack(_10)
		if (valueList.includes('11')) triggerBlack(_11)
		if (valueList.includes('12')) triggerRed(_12)
		if (valueList.includes('13')) triggerBlack(_13)
		if (valueList.includes('14')) triggerRed(_14)
		if (valueList.includes('15')) triggerBlack(_15)
		if (valueList.includes('16')) triggerRed(_16)
		if (valueList.includes('17')) triggerBlack(_17)
		if (valueList.includes('18')) triggerRed(_18)
		if (valueList.includes('19')) triggerRed(_19)
		if (valueList.includes('20')) triggerBlack(_20)
		if (valueList.includes('21')) triggerRed(_21)
		if (valueList.includes('22')) triggerBlack(_22)
		if (valueList.includes('23')) triggerRed(_23)
		if (valueList.includes('24')) triggerBlack(_24)
		if (valueList.includes('25')) triggerRed(_25)
		if (valueList.includes('26')) triggerBlack(_26)
		if (valueList.includes('27')) triggerRed(_27)
		if (valueList.includes('28')) triggerBlack(_28)
		if (valueList.includes('29')) triggerBlack(_29)
		if (valueList.includes('30')) triggerRed(_30)
		if (valueList.includes('31')) triggerBlack(_31)
		if (valueList.includes('32')) triggerRed(_32)
		if (valueList.includes('33')) triggerBlack(_33)
		if (valueList.includes('34')) triggerRed(_34)
		if (valueList.includes('35')) triggerBlack(_35)
		if (valueList.includes('36')) triggerRed(_36)

		if (valueList.includes('col3')) {
			triggerRed(_3)
			triggerBlack(_6)
			triggerRed(_9)
			triggerRed(_12)
			triggerBlack(_15)
			triggerRed(_18)
			triggerRed(_21)
			triggerBlack(_24)
			triggerRed(_27)
			triggerRed(_30)
			triggerBlack(_33)
			triggerRed(_36)
		}

		if (valueList.includes('col2')) {
			triggerBlack(_2)
			triggerRed(_5)
			triggerBlack(_8)
			triggerBlack(_11)
			triggerRed(_14)
			triggerBlack(_17)
			triggerBlack(_20)
			triggerRed(_23)
			triggerBlack(_26)
			triggerBlack(_29)
			triggerRed(_32)
			triggerBlack(_35)
		}

		if (valueList.includes('col1')) {
			triggerRed(_1)
			triggerBlack(_4)
			triggerRed(_7)
			triggerBlack(_10)
			triggerBlack(_13)
			triggerRed(_16)
			triggerRed(_19)
			triggerBlack(_22)
			triggerRed(_25)
			triggerBlack(_28)
			triggerBlack(_31)
			triggerRed(_34)
		}

		if (valueList.includes('1st12')) {
			triggerRed(_1)
			triggerBlack(_2)
			triggerRed(_3)
			triggerBlack(_4)
			triggerRed(_5)
			triggerBlack(_6)
			triggerRed(_7)
			triggerBlack(_8)
			triggerRed(_9)
			triggerBlack(_10)
			triggerBlack(_11)
			triggerRed(_12)
		}

		if (valueList.includes('2nd12')) {
			triggerBlack(_13)
			triggerRed(_14)
			triggerBlack(_15)
			triggerRed(_16)
			triggerBlack(_17)
			triggerRed(_18)
			triggerRed(_19)
			triggerBlack(_20)
			triggerRed(_21)
			triggerBlack(_22)
			triggerRed(_23)
			triggerBlack(_24)
		}

		if (valueList.includes('3rd12')) {
			triggerRed(_25)
			triggerBlack(_26)
			triggerRed(_27)
			triggerBlack(_28)
			triggerBlack(_29)
			triggerRed(_30)
			triggerBlack(_31)
			triggerRed(_32)
			triggerBlack(_33)
			triggerRed(_34)
			triggerBlack(_35)
			triggerRed(_36)
		}

		if (valueList.includes('low')) {
			triggerRed(_1)
			triggerBlack(_2)
			triggerRed(_3)
			triggerBlack(_4)
			triggerRed(_5)
			triggerBlack(_6)
			triggerRed(_7)
			triggerBlack(_8)
			triggerRed(_9)
			triggerBlack(_10)
			triggerBlack(_11)
			triggerRed(_12)
			triggerBlack(_13)
			triggerRed(_14)
			triggerBlack(_15)
			triggerRed(_16)
			triggerBlack(_17)
			triggerRed(_18)
		}

		if (valueList.includes('high')) {
			triggerRed(_19)
			triggerBlack(_20)
			triggerRed(_21)
			triggerBlack(_22)
			triggerRed(_23)
			triggerBlack(_24)
			triggerRed(_25)
			triggerBlack(_26)
			triggerRed(_27)
			triggerBlack(_28)
			triggerBlack(_29)
			triggerRed(_30)
			triggerBlack(_31)
			triggerRed(_32)
			triggerBlack(_33)
			triggerRed(_34)
			triggerBlack(_35)
			triggerRed(_36)
		}

		if (valueList.includes('even')) {
			triggerBlack(_2)
			triggerBlack(_4)
			triggerBlack(_6)
			triggerBlack(_8)
			triggerBlack(_10)
			triggerRed(_12)
			triggerRed(_14)
			triggerRed(_16)
			triggerRed(_18)
			triggerBlack(_20)
			triggerBlack(_22)
			triggerBlack(_24)
			triggerBlack(_26)
			triggerBlack(_28)
			triggerRed(_30)
			triggerRed(_32)
			triggerRed(_34)
			triggerRed(_36)
		}

		if (valueList.includes('odd')) {
			triggerRed(_1)
			triggerRed(_3)
			triggerRed(_5)
			triggerRed(_7)
			triggerRed(_9)
			triggerBlack(_11)
			triggerBlack(_13)
			triggerBlack(_15)
			triggerBlack(_17)
			triggerRed(_19)
			triggerRed(_21)
			triggerRed(_23)
			triggerRed(_25)
			triggerRed(_27)
			triggerBlack(_29)
			triggerBlack(_31)
			triggerBlack(_33)
			triggerBlack(_35)
		}

		if (valueList.includes('red')) {
			triggerRed(_1)
			triggerRed(_3)
			triggerRed(_5)
			triggerRed(_7)
			triggerRed(_9)
			triggerRed(_12)
			triggerRed(_14)
			triggerRed(_16)
			triggerRed(_18)
			triggerRed(_19)
			triggerRed(_21)
			triggerRed(_23)
			triggerRed(_25)
			triggerRed(_27)
			triggerRed(_30)
			triggerRed(_32)
			triggerRed(_34)
			triggerRed(_36)
		}

		if (valueList.includes('black')) {
			triggerBlack(_2)
			triggerBlack(_4)
			triggerBlack(_6)
			triggerBlack(_8)
			triggerBlack(_10)
			triggerBlack(_11)
			triggerBlack(_13)
			triggerBlack(_15)
			triggerBlack(_17)
			triggerBlack(_20)
			triggerBlack(_22)
			triggerBlack(_24)
			triggerBlack(_26)
			triggerBlack(_28)
			triggerBlack(_29)
			triggerBlack(_31)
			triggerBlack(_33)
			triggerBlack(_35)
		}


	}

	const handleMouseLeave = (value) => {
		const valueList = value.split('-');
		if (valueList.includes('0')) fadeGreen(_0)
		if (valueList.includes('1')) fadeRed(_1)
		if (valueList.includes('2')) fadeBlack(_2)
		if (valueList.includes('3')) fadeRed(_3)
		if (valueList.includes('4')) fadeBlack(_4)
		if (valueList.includes('5')) fadeRed(_5)
		if (valueList.includes('6')) fadeBlack(_6)
		if (valueList.includes('7')) fadeRed(_7)
		if (valueList.includes('8')) fadeBlack(_8)
		if (valueList.includes('9')) fadeRed(_9)
		if (valueList.includes('10')) fadeBlack(_10)
		if (valueList.includes('11')) fadeBlack(_11)
		if (valueList.includes('12')) fadeRed(_12)
		if (valueList.includes('13')) fadeBlack(_13)
		if (valueList.includes('14')) fadeRed(_14)
		if (valueList.includes('15')) fadeBlack(_15)
		if (valueList.includes('16')) fadeRed(_16)
		if (valueList.includes('17')) fadeBlack(_17)
		if (valueList.includes('18')) fadeRed(_18)
		if (valueList.includes('19')) fadeRed(_19)
		if (valueList.includes('20')) fadeBlack(_20)
		if (valueList.includes('21')) fadeRed(_21)
		if (valueList.includes('22')) fadeBlack(_22)
		if (valueList.includes('23')) fadeRed(_23)
		if (valueList.includes('24')) fadeBlack(_24)
		if (valueList.includes('25')) fadeRed(_25)
		if (valueList.includes('26')) fadeBlack(_26)
		if (valueList.includes('27')) fadeRed(_27)
		if (valueList.includes('28')) fadeBlack(_28)
		if (valueList.includes('29')) fadeBlack(_29)
		if (valueList.includes('30')) fadeRed(_30)
		if (valueList.includes('31')) fadeBlack(_31)
		if (valueList.includes('32')) fadeRed(_32)
		if (valueList.includes('33')) fadeBlack(_33)
		if (valueList.includes('34')) fadeRed(_34)
		if (valueList.includes('35')) fadeBlack(_35)
		if (valueList.includes('36')) fadeRed(_36)

		if (valueList.includes('col3')) {
			fadeRed(_3)
			fadeBlack(_6)
			fadeRed(_9)
			fadeRed(_12)
			fadeBlack(_15)
			fadeRed(_18)
			fadeRed(_21)
			fadeBlack(_24)
			fadeRed(_27)
			fadeRed(_30)
			fadeBlack(_33)
			fadeRed(_36)
		}

		if (valueList.includes('col2')) {
			fadeBlack(_2)
			fadeRed(_5)
			fadeBlack(_8)
			fadeBlack(_11)
			fadeRed(_14)
			fadeBlack(_17)
			fadeBlack(_20)
			fadeRed(_23)
			fadeBlack(_26)
			fadeBlack(_29)
			fadeRed(_32)
			fadeBlack(_35)
		}

		if (valueList.includes('col1')) {
			fadeRed(_1)
			fadeBlack(_4)
			fadeRed(_7)
			fadeBlack(_10)
			fadeBlack(_13)
			fadeRed(_16)
			fadeRed(_19)
			fadeBlack(_22)
			fadeRed(_25)
			fadeBlack(_28)
			fadeBlack(_31)
			fadeRed(_34)
		}

		if (valueList.includes('1st12')) {
			fadeRed(_1)
			fadeBlack(_2)
			fadeRed(_3)
			fadeBlack(_4)
			fadeRed(_5)
			fadeBlack(_6)
			fadeRed(_7)
			fadeBlack(_8)
			fadeRed(_9)
			fadeBlack(_10)
			fadeBlack(_11)
			fadeRed(_12)
		}

		if (valueList.includes('2nd12')) {
			fadeBlack(_13)
			fadeRed(_14)
			fadeBlack(_15)
			fadeRed(_16)
			fadeBlack(_17)
			fadeRed(_18)
			fadeRed(_19)
			fadeBlack(_20)
			fadeRed(_21)
			fadeBlack(_22)
			fadeRed(_23)
			fadeBlack(_24)
		}

		if (valueList.includes('3rd12')) {
			fadeRed(_25)
			fadeBlack(_26)
			fadeRed(_27)
			fadeBlack(_28)
			fadeBlack(_29)
			fadeRed(_30)
			fadeBlack(_31)
			fadeRed(_32)
			fadeBlack(_33)
			fadeRed(_34)
			fadeBlack(_35)
			fadeRed(_36)
		}

		if (valueList.includes('low')) {
			fadeRed(_1)
			fadeBlack(_2)
			fadeRed(_3)
			fadeBlack(_4)
			fadeRed(_5)
			fadeBlack(_6)
			fadeRed(_7)
			fadeBlack(_8)
			fadeRed(_9)
			fadeBlack(_10)
			fadeBlack(_11)
			fadeRed(_12)
			fadeBlack(_13)
			fadeRed(_14)
			fadeBlack(_15)
			fadeRed(_16)
			fadeBlack(_17)
			fadeRed(_18)
		}

		if (valueList.includes('high')) {
			fadeRed(_19)
			fadeBlack(_20)
			fadeRed(_21)
			fadeBlack(_22)
			fadeRed(_23)
			fadeBlack(_24)
			fadeRed(_25)
			fadeBlack(_26)
			fadeRed(_27)
			fadeBlack(_28)
			fadeBlack(_29)
			fadeRed(_30)
			fadeBlack(_31)
			fadeRed(_32)
			fadeBlack(_33)
			fadeRed(_34)
			fadeBlack(_35)
			fadeRed(_36)
		}

		if (valueList.includes('even')) {
			fadeBlack(_2)
			fadeBlack(_4)
			fadeBlack(_6)
			fadeBlack(_8)
			fadeBlack(_10)
			fadeRed(_12)
			fadeRed(_14)
			fadeRed(_16)
			fadeRed(_18)
			fadeBlack(_20)
			fadeBlack(_22)
			fadeBlack(_24)
			fadeBlack(_26)
			fadeBlack(_28)
			fadeRed(_30)
			fadeRed(_32)
			fadeRed(_34)
			fadeRed(_36)
		}

		if (valueList.includes('odd')) {
			fadeRed(_1)
			fadeRed(_3)
			fadeRed(_5)
			fadeRed(_7)
			fadeRed(_9)
			fadeBlack(_11)
			fadeBlack(_13)
			fadeBlack(_15)
			fadeBlack(_17)
			fadeRed(_19)
			fadeRed(_21)
			fadeRed(_23)
			fadeRed(_25)
			fadeRed(_27)
			fadeBlack(_29)
			fadeBlack(_31)
			fadeBlack(_33)
			fadeBlack(_35)
		}

		if (valueList.includes('red')) {
			fadeRed(_1)
			fadeRed(_3)
			fadeRed(_5)
			fadeRed(_7)
			fadeRed(_9)
			fadeRed(_12)
			fadeRed(_14)
			fadeRed(_16)
			fadeRed(_18)
			fadeRed(_19)
			fadeRed(_21)
			fadeRed(_23)
			fadeRed(_25)
			fadeRed(_27)
			fadeRed(_30)
			fadeRed(_32)
			fadeRed(_34)
			fadeRed(_36)
		}

		if (valueList.includes('black')) {
			fadeBlack(_2)
			fadeBlack(_4)
			fadeBlack(_6)
			fadeBlack(_8)
			fadeBlack(_10)
			fadeBlack(_11)
			fadeBlack(_13)
			fadeBlack(_15)
			fadeBlack(_17)
			fadeBlack(_20)
			fadeBlack(_22)
			fadeBlack(_24)
			fadeBlack(_26)
			fadeBlack(_28)
			fadeBlack(_29)
			fadeBlack(_31)
			fadeBlack(_33)
			fadeBlack(_35)
		}
	}

	const triggerGreen = (value) => {
		value.current.style.backgroundColor = '#3CC042'
		value.current.style.boxShadow = 'inset 0 0 5px #FFF, inset 0 0 5px #FFF'
		value.current.style.color = '#FBEC0F'
	}

	const fadeGreen = (value) => {
		value.current.style.backgroundColor = 'initial'
		value.current.style.boxShadow = 'none'
		value.current.style.color = 'white'
	}

	const triggerRed = (value) => {
		value.current.style.backgroundColor = '#C00'
		value.current.style.boxShadow = 'inset 0 0 5px #FFF, inset 0 0 5px #FFF'
		value.current.style.color = '#FBEC0F'
	}

	const fadeRed = (value) => {
		value.current.style.backgroundColor = '#A91607'
		value.current.style.boxShadow = 'none'
		value.current.style.color = 'white'
	}

	const triggerBlack = (value) => {
		value.current.style.backgroundColor = '#000'
		value.current.style.boxShadow = 'inset 0 0 5px #FFF, inset 0 0 5px #FFF'
		value.current.style.color = '#FBEC0F'
	}

	const fadeBlack = (value) => {
		value.current.style.backgroundColor = '#010a01'
		value.current.style.boxShadow = 'none'
		value.current.style.color = 'white'
	}


    
    return (
        <>
			<table className={styles.mat}>
				<tbody>
            	    <tr className={styles.nums}>
				    	<td id='numbers-0' className={`${styles.num} ${styles.green} ${styles.zero}`} onMouseEnter={() => handleMouseEnter('numbers-0')}  onMouseLeave={() => handleMouseLeave('numbers-0')} onClick={(e) => props.addBet(e, 'numbers-0')} ref={_0} rowSpan="3"><span>0</span></td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_3}>
							<span>3</span>
							<div className={styles.topLeft}>
								<div id='numbers-0-3' onMouseEnter={() => handleMouseEnter('numbers-0-3')}  onMouseLeave={() => handleMouseLeave('numbers-0-3')} onClick={(e) => props.addBet(e, 'numbers-0-3')}></div>
								<div id='numbers-3' onMouseEnter={() => handleMouseEnter('numbers-3')}  onMouseLeave={() => handleMouseLeave('numbers-3')} onClick={(e) => props.addBet(e, 'numbers-3')}></div>
								<div id='numbers-3-6' onMouseEnter={() => handleMouseEnter('numbers-3-6')}  onMouseLeave={() => handleMouseLeave('numbers-3-6')} onClick={(e) => props.addBet(e, 'numbers-3-6')}></div>
								<div id='numbers-0-2-3' onMouseEnter={() => handleMouseEnter('numbers-0-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-0-2-3')} onClick={(e) => props.addBet(e, 'numbers-0-2-3')}></div>
								<div id='numbers-2-3' onMouseEnter={() => handleMouseEnter('numbers-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-2-3')} onClick={(e) => props.addBet(e, 'numbers-2-3')}></div>
								<div id='numbers-2-3-5-6' onMouseEnter={() => handleMouseEnter('numbers-2-3-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-2-3-5-6')} onClick={(e) => props.addBet(e, 'numbers-2-3-5-6')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.black}`} ref={_6}>
							<span>6</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-3-6')}  onMouseLeave={() => handleMouseLeave('numbers-3-6')} onClick={(e) => props.addBet(e, 'numbers-3-6')}></div>
								<div id='numbers-6' onMouseEnter={() => handleMouseEnter('numbers-6')}  onMouseLeave={() => handleMouseLeave('numbers-6')} onClick={(e) => props.addBet(e, 'numbers-6')}></div>
								<div id='numbers-6-9' onMouseEnter={() => handleMouseEnter('numbers-6-9')}  onMouseLeave={() => handleMouseLeave('numbers-6-9')} onClick={(e) => props.addBet(e, 'numbers-6-9')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-2-3-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-2-3-5-6')} onClick={(e) => props.addBet(e, 'numbers-2-3-5-6')}></div>
								<div id='numbers-5-6' onMouseEnter={() => handleMouseEnter('numbers-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-5-6')} onClick={(e) => props.addBet(e, 'numbers-5-6')}></div>
								<div id='numbers-5-6-8-9' onMouseEnter={() => handleMouseEnter('numbers-5-6-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-5-6-8-9')} onClick={(e) => props.addBet(e, 'numbers-5-6-8-9')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_9}>
							<span>9</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-6-9')}  onMouseLeave={() => handleMouseLeave('numbers-6-9')} onClick={(e) => props.addBet(e, 'numbers-6-9')}></div>
								<div id='numbers-9' onMouseEnter={() => handleMouseEnter('numbers-9')}  onMouseLeave={() => handleMouseLeave('numbers-9')} onClick={(e) => props.addBet(e, 'numbers-9')}></div>
								<div id='numbers-9-12' onMouseEnter={() => handleMouseEnter('numbers-9-12')}  onMouseLeave={() => handleMouseLeave('numbers-9-12')} onClick={(e) => props.addBet(e, 'numbers-9-12')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-5-6-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-5-6-8-9')} onClick={(e) => props.addBet(e, 'numbers-5-6-8-9')}></div>
								<div id='numbers-8-9' onMouseEnter={() => handleMouseEnter('numbers-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-8-9')} onClick={(e) => props.addBet(e, 'numbers-8-9')}></div>
								<div id='numbers-8-9-11-12' onMouseEnter={() => handleMouseEnter('numbers-8-9-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-8-9-11-12')} onClick={(e) => props.addBet(e, 'numbers-8-9-11-12')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_12}>
							<span>12</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-9-12')}  onMouseLeave={() => handleMouseLeave('numbers-9-12')} onClick={(e) => props.addBet(e, 'numbers-9-12')}></div>
								<div id='numbers-12' onMouseEnter={() => handleMouseEnter('numbers-12')}  onMouseLeave={() => handleMouseLeave('numbers-12')} onClick={(e) => props.addBet(e, 'numbers-12')}></div>
								<div id='numbers-12-15' onMouseEnter={() => handleMouseEnter('numbers-12-15')}  onMouseLeave={() => handleMouseLeave('numbers-12-15')} onClick={(e) => props.addBet(e, 'numbers-12-15')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-8-9-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-8-9-11-12')} onClick={(e) => props.addBet(e, 'numbers-8-9-11-12')}></div>
								<div id='numbers-11-12' onMouseEnter={() => handleMouseEnter('numbers-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-11-12')} onClick={(e) => props.addBet(e, 'numbers-11-12')}></div>
								<div id='numbers-11-12-14-15' onMouseEnter={() => handleMouseEnter('numbers-11-12-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-11-12-14-15')} onClick={(e) => props.addBet(e, 'numbers-11-12-14-15')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.black}`} ref={_15}>
							<span>15</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-12-15')}  onMouseLeave={() => handleMouseLeave('numbers-12-15')} onClick={(e) => props.addBet(e, 'numbers-12-15')}></div>
								<div id='numbers-15' onMouseEnter={() => handleMouseEnter('numbers-15')}  onMouseLeave={() => handleMouseLeave('numbers-15')} onClick={(e) => props.addBet(e, 'numbers-15')}></div>
								<div id='numbers-15-18' onMouseEnter={() => handleMouseEnter('numbers-15-18')}  onMouseLeave={() => handleMouseLeave('numbers-15-18')} onClick={(e) => props.addBet(e, 'numbers-15-18')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-11-12-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-11-12-14-15')} onClick={(e) => props.addBet(e, 'numbers-11-12-14-15')}></div>
								<div id='numbers-14-15' onMouseEnter={() => handleMouseEnter('numbers-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-14-15')} onClick={(e) => props.addBet(e, 'numbers-14-15')}></div>
								<div id='numbers-14-15-17-18' onMouseEnter={() => handleMouseEnter('numbers-14-15-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-14-15-17-18')} onClick={(e) => props.addBet(e, 'numbers-14-15-17-18')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_18}>
							<span>18</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-15-18')}  onMouseLeave={() => handleMouseLeave('numbers-15-18')} onClick={(e) => props.addBet(e, 'numbers-15-18')}></div>
								<div id='numbers-18' onMouseEnter={() => handleMouseEnter('numbers-18')}  onMouseLeave={() => handleMouseLeave('numbers-18')} onClick={(e) => props.addBet(e, 'numbers-18')}></div>
								<div id='numbers-18-21' onMouseEnter={() => handleMouseEnter('numbers-18-21')}  onMouseLeave={() => handleMouseLeave('numbers-18-21')} onClick={(e) => props.addBet(e, 'numbers-18-21')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-14-15-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-14-15-17-18')} onClick={(e) => props.addBet(e, 'numbers-14-15-17-18')}></div>
								<div id='numbers-17-18' onMouseEnter={() => handleMouseEnter('numbers-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-17-18')} onClick={(e) => props.addBet(e, 'numbers-17-18')}></div>
								<div id='numbers-17-18-20-21' onMouseEnter={() => handleMouseEnter('numbers-17-18-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-17-18-20-21')} onClick={(e) => props.addBet(e, 'numbers-17-18-20-21')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_21}>
							<span>21</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-18-21')}  onMouseLeave={() => handleMouseLeave('numbers-18-21')} onClick={(e) => props.addBet(e, 'numbers-18-21')}></div>
								<div id='numbers-21' onMouseEnter={() => handleMouseEnter('numbers-21')}  onMouseLeave={() => handleMouseLeave('numbers-21')} onClick={(e) => props.addBet(e, 'numbers-21')}></div>
								<div id='numbers-21-24' onMouseEnter={() => handleMouseEnter('numbers-21-24')}  onMouseLeave={() => handleMouseLeave('numbers-21-24')} onClick={(e) => props.addBet(e, 'numbers-21-24')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-17-18-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-17-18-20-21')} onClick={(e) => props.addBet(e, 'numbers-17-18-20-21')}></div>
								<div id='numbers-20-21' onMouseEnter={() => handleMouseEnter('numbers-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-20-21')} onClick={(e) => props.addBet(e, 'numbers-20-21')}></div>
								<div id='numbers-20-21-23-24' onMouseEnter={() => handleMouseEnter('numbers-20-21-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-20-21-23-24')} onClick={(e) => props.addBet(e, 'numbers-20-21-23-24')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.black}`} ref={_24}>
							<span>24</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-21-24')}  onMouseLeave={() => handleMouseLeave('numbers-21-24')} onClick={(e) => props.addBet(e, 'numbers-21-24')}></div>
								<div id='numbers-24' onMouseEnter={() => handleMouseEnter('numbers-24')}  onMouseLeave={() => handleMouseLeave('numbers-24')} onClick={(e) => props.addBet(e, 'numbers-24')}></div>
								<div id='numbers-24-27' onMouseEnter={() => handleMouseEnter('numbers-24-27')}  onMouseLeave={() => handleMouseLeave('numbers-24-27')} onClick={(e) => props.addBet(e, 'numbers-24-27')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-20-21-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-20-21-23-24')} onClick={(e) => props.addBet(e, 'numbers-20-21-23-24')}></div>
								<div id='numbers-23-24' onMouseEnter={() => handleMouseEnter('numbers-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-23-24')} onClick={(e) => props.addBet(e, 'numbers-23-24')}></div>
								<div id='numbers-23' onMouseEnter={() => handleMouseEnter('numbers-23-24-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-23-24-26-27')} onClick={(e) => props.addBet(e, 'numbers-23-24-26-27')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_27}>
							<span>27</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-24-27')}  onMouseLeave={() => handleMouseLeave('numbers-24-27')} onClick={(e) => props.addBet(e, 'numbers-24-27')}></div>
								<div id='numbers-27' onMouseEnter={() => handleMouseEnter('numbers-27')}  onMouseLeave={() => handleMouseLeave('numbers-27')} onClick={(e) => props.addBet(e, 'numbers-27')}></div>
								<div id='numbers-27-30' onMouseEnter={() => handleMouseEnter('numbers-27-30')}  onMouseLeave={() => handleMouseLeave('numbers-27-30')} onClick={(e) => props.addBet(e, 'numbers-27-30')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-23-24-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-23-24-26-27')} onClick={(e) => props.addBet(e, 'numbers-23-24-26-27')}></div>
								<div id='numbers-26-27' onMouseEnter={() => handleMouseEnter('numbers-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-26-27')} onClick={(e) => props.addBet(e, 'numbers-26-27')}></div>
								<div id='numbers-26-27-29-30' onMouseEnter={() => handleMouseEnter('numbers-26-27-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-26-27-29-30')} onClick={(e) => props.addBet(e, 'numbers-26-27-29-30')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_30}>
							<span>30</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-27-30')}  onMouseLeave={() => handleMouseLeave('numbers-27-30')} onClick={(e) => props.addBet(e, 'numbers-27-30')}></div>
								<div id='numbers-30' onMouseEnter={() => handleMouseEnter('numbers-30')}  onMouseLeave={() => handleMouseLeave('numbers-30')} onClick={(e) => props.addBet(e, 'numbers-30')}></div>
								<div id='numbers-30-33' onMouseEnter={() => handleMouseEnter('numbers-30-33')}  onMouseLeave={() => handleMouseLeave('numbers-30-33')} onClick={(e) => props.addBet(e, 'numbers-30-33')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-26-27-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-26-27-29-30')} onClick={(e) => props.addBet(e, 'numbers-26-27-29-30')}></div>
								<div id='numbers-29-30' onMouseEnter={() => handleMouseEnter('numbers-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-29-30')} onClick={(e) => props.addBet(e, 'numbers-29-30')}></div>
								<div id='numbers-29-30-32-33' onMouseEnter={() => handleMouseEnter('numbers-29-30-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-29-30-32-33')} onClick={(e) => props.addBet(e, 'numbers-29-30-32-33')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.black}`} ref={_33}>
							<span>33</span>
							<div className={styles.top}>
								<div onMouseEnter={() => handleMouseEnter('numbers-30-33')}  onMouseLeave={() => handleMouseLeave('numbers-30-33')} onClick={(e) => props.addBet(e, 'numbers-30-33')}></div>
								<div id='numbers-33' onMouseEnter={() => handleMouseEnter('numbers-33')}  onMouseLeave={() => handleMouseLeave('numbers-33')} onClick={(e) => props.addBet(e, 'numbers-33')}></div>
								<div id='numbers-33-36' onMouseEnter={() => handleMouseEnter('numbers-33-36')}  onMouseLeave={() => handleMouseLeave('numbers-33-36')} onClick={(e) => props.addBet(e, 'numbers-33-36')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-29-30-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-29-30-32-33')} onClick={(e) => props.addBet(e, 'numbers-29-30-32-33')}></div>
								<div id='numbers-32-33' onMouseEnter={() => handleMouseEnter('numbers-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-32-33')} onClick={(e) => props.addBet(e, 'numbers-32-33')}></div>
								<div id='numbers-32-33-35-36' onMouseEnter={() => handleMouseEnter('numbers-32-33-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-32-33-35-36')} onClick={(e) => props.addBet(e, 'numbers-32-33-35-36')}></div>
							</div>
						</td>
				    	<td className={`${styles.num} ${styles.red}`} ref={_36}>
							<span>36</span>
							<div className={styles.topRight}>
								<div onMouseEnter={() => handleMouseEnter('numbers-33-36')}  onMouseLeave={() => handleMouseLeave('numbers-33-36')} onClick={(e) => props.addBet(e, 'numbers-33-36')}></div>
								<div id='numbers-36' onMouseEnter={() => handleMouseEnter('numbers-36')}  onMouseLeave={() => handleMouseLeave('numbers-36')} onClick={(e) => props.addBet(e, 'numbers-36')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-32-33-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-32-33-35-36')} onClick={(e) => props.addBet(e, 'numbers-32-33-35-36')}></div>
								<div id='numbers-35-36' onMouseEnter={() => handleMouseEnter('numbers-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-35-36')} onClick={(e) => props.addBet(e, 'numbers-35-36')}></div>
							</div>
						</td>
				    	<td id='column-3' className={styles.sector} onMouseEnter={() => handleMouseEnter('col3')}  onMouseLeave={() => handleMouseLeave('col3')} onClick={(e) => props.addBet(e, 'column-3')}><span className={styles.vt}>2 to 1</span></td>
				    </tr>
            	    <tr className={styles.nums}>
				        <td className={styles.hidden}></td>
				        <td className={`${styles.num} ${styles.black}`} ref={_2}>
							<span>2</span>
							<div className={styles.middleLeft}>
								<div onMouseEnter={() => handleMouseEnter('numbers-0-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-0-2-3')} onClick={(e) => props.addBet(e, 'numbers-0-2-3')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-2-3')} onClick={(e) => props.addBet(e, 'numbers-2-3')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-2-3-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-2-3-5-6')} onClick={(e) => props.addBet(e, 'numbers-2-3-5-6')}></div>
								<div id='numbers-0-2' onMouseEnter={() => handleMouseEnter('numbers-0-2')}  onMouseLeave={() => handleMouseLeave('numbers-0-2')} onClick={(e) => props.addBet(e, 'numbers-0-2')}></div>
								<div id='numbers-2' onMouseEnter={() => handleMouseEnter('numbers-2')}  onMouseLeave={() => handleMouseLeave('numbers-2')} onClick={(e) => props.addBet(e, 'numbers-2')}></div>
								<div id='numbers-2-5' onMouseEnter={() => handleMouseEnter('numbers-2-5')}  onMouseLeave={() => handleMouseLeave('numbers-2-5')} onClick={(e) => props.addBet(e, 'numbers-2-5')}></div>
								<div id='numbers-0-1-2' onMouseEnter={() => handleMouseEnter('numbers-0-1-2')}  onMouseLeave={() => handleMouseLeave('numbers-0-1-2')} onClick={(e) => props.addBet(e, 'numbers-0-1-2')}></div>
								<div id='numbers-1-2' onMouseEnter={() => handleMouseEnter('numbers-1-2')}  onMouseLeave={() => handleMouseLeave('numbers-1-2')} onClick={(e) => props.addBet(e, 'numbers-1-2')}></div>
								<div id='numbers-1-2-4-5' onMouseEnter={() => handleMouseEnter('numbers-1-2-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-4-5')} onClick={(e) => props.addBet(e, 'numbers-1-2-4-5')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_5}>
							<span>5</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-2-3-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-2-3-5-6')} onClick={(e) => props.addBet(e, 'numbers-2-3-5-6')}></div>
								<div id='numbers-5-6' onMouseEnter={() => handleMouseEnter('numbers-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-5-6')} onClick={(e) => props.addBet(e, 'numbers-5-6')}></div>
								<div id='numbers-5-6-8-9' onMouseEnter={() => handleMouseEnter('numbers-5-6-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-5-6-8-9')} onClick={(e) => props.addBet(e, 'numbers-5-6-8-9')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-2-5')}  onMouseLeave={() => handleMouseLeave('numbers-2-5')} onClick={(e) => props.addBet(e, 'numbers-2-5')}></div>
								<div id='numbers-5' onMouseEnter={() => handleMouseEnter('numbers-5')}  onMouseLeave={() => handleMouseLeave('numbers-5')} onClick={(e) => props.addBet(e, 'numbers-5')}></div>
								<div id='numbers-5-8' onMouseEnter={() => handleMouseEnter('numbers-5-8')}  onMouseLeave={() => handleMouseLeave('numbers-5-8')} onClick={(e) => props.addBet(e, 'numbers-5-8')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-4-5')} onClick={(e) => props.addBet(e, 'numbers-1-2-4-5')}></div>
								<div id='numbers-4-5' onMouseEnter={() => handleMouseEnter('numbers-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-4-5')} onClick={(e) => props.addBet(e, 'numbers-4-5')}></div>
								<div id='numbers-4-5-7-8' onMouseEnter={() => handleMouseEnter('numbers-4-5-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-7-8')} onClick={(e) => props.addBet(e, 'numbers-4-5-7-8')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_8}>
							<span>8</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-5-6-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-5-6-8-9')} onClick={(e) => props.addBet(e, 'numbers-5-6-8-9')}></div>
								<div id='numbers-8-9' onMouseEnter={() => handleMouseEnter('numbers-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-8-9')} onClick={(e) => props.addBet(e, 'numbers-8-9')}></div>
								<div id='numbers-8-9-11-12' onMouseEnter={() => handleMouseEnter('numbers-8-9-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-8-9-11-12')} onClick={(e) => props.addBet(e, 'numbers-8-9-11-12')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-5-8')}  onMouseLeave={() => handleMouseLeave('numbers-5-8')} onClick={(e) => props.addBet(e, 'numbers-5-8')}></div>
								<div id='numbers-8' onMouseEnter={() => handleMouseEnter('numbers-8')}  onMouseLeave={() => handleMouseLeave('numbers-8')} onClick={(e) => props.addBet(e, 'numbers-8')}></div>
								<div id='numbers-8-11' onMouseEnter={() => handleMouseEnter('numbers-8-11')}  onMouseLeave={() => handleMouseLeave('numbers-8-11')} onClick={(e) => props.addBet(e, 'numbers-8-11')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-7-8')} onClick={(e) => props.addBet(e, 'numbers-4-5-7-8')}></div>
								<div id='numbers-7-8' onMouseEnter={() => handleMouseEnter('numbers-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-7-8')} onClick={(e) => props.addBet(e, 'numbers-7-8')}></div>
								<div id='numbers-7-8-10-11' onMouseEnter={() => handleMouseEnter('numbers-7-8-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-10-11')} onClick={(e) => props.addBet(e, 'numbers-7-8-10-11')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_11}>
							<span>11</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-8-9-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-8-9-11-12')} onClick={(e) => props.addBet(e, 'numbers-8-9-11-12')}></div>
								<div id='numbers-11-12' onMouseEnter={() => handleMouseEnter('numbers-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-11-12')} onClick={(e) => props.addBet(e, 'numbers-11-12')}></div>
								<div id='numbers-11-12-14-15' onMouseEnter={() => handleMouseEnter('numbers-11-12-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-11-12-14-15')} onClick={(e) => props.addBet(e, 'numbers-11-12-14-15')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-8-11')}  onMouseLeave={() => handleMouseLeave('numbers-8-11')} onClick={(e) => props.addBet(e, 'numbers-8-11')}></div>
								<div id='numbers-11' onMouseEnter={() => handleMouseEnter('numbers-11')}  onMouseLeave={() => handleMouseLeave('numbers-11')} onClick={(e) => props.addBet(e, 'numbers-11')}></div>
								<div id='numbers-11-14' onMouseEnter={() => handleMouseEnter('numbers-11-14')}  onMouseLeave={() => handleMouseLeave('numbers-11-14')} onClick={(e) => props.addBet(e, 'numbers-11-14')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-10-11')} onClick={(e) => props.addBet(e, 'numbers-7-8-10-11')}></div>
								<div id='numbers-10-11' onMouseEnter={() => handleMouseEnter('numbers-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-10-11')} onClick={(e) => props.addBet(e, 'numbers-10-11')}></div>
								<div id='numbers-10-11-13-14' onMouseEnter={() => handleMouseEnter('numbers-10-11-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-13-14')} onClick={(e) => props.addBet(e, 'numbers-10-11-13-14')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_14}>
							<span>14</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-11-12-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-11-12-14-15')} onClick={(e) => props.addBet(e, 'numbers-11-12-14-15')}></div>
								<div id='numbers-14-15' onMouseEnter={() => handleMouseEnter('numbers-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-14-15')} onClick={(e) => props.addBet(e, 'numbers-14-15')}></div>
								<div id='numbers-14-15-17-18' onMouseEnter={() => handleMouseEnter('numbers-14-15-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-14-15-17-18')} onClick={(e) => props.addBet(e, 'numbers-14-15-17-18')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-11-14')}  onMouseLeave={() => handleMouseLeave('numbers-11-14')} onClick={(e) => props.addBet(e, 'numbers-11-14')}></div>
								<div id='numbers-14' onMouseEnter={() => handleMouseEnter('numbers-14')}  onMouseLeave={() => handleMouseLeave('numbers-14')} onClick={(e) => props.addBet(e, 'numbers-14')}></div>
								<div id='numbers-14-17' onMouseEnter={() => handleMouseEnter('numbers-14-17')}  onMouseLeave={() => handleMouseLeave('numbers-14-17')} onClick={(e) => props.addBet(e, 'numbers-14-17')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-13-14')} onClick={(e) => props.addBet(e, 'numbers-10-11-13-14')}></div>
								<div id='numbers-13-14' onMouseEnter={() => handleMouseEnter('numbers-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-13-14')} onClick={(e) => props.addBet(e, 'numbers-13-14')}></div>
								<div id='numbers-13-14-16-17' onMouseEnter={() => handleMouseEnter('numbers-13-14-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-16-17')} onClick={(e) => props.addBet(e, 'numbers-13-14-16-17')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_17}>
							<span>17</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-14-15-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-14-15-17-18')} onClick={(e) => props.addBet(e, 'numbers-14-15-17-18')}></div>
								<div id='numbers-17' onMouseEnter={() => handleMouseEnter('numbers-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-17-18')} onClick={(e) => props.addBet(e, 'numbers-17-18')}></div>
								<div id='numbers-17-18-20-21' onMouseEnter={() => handleMouseEnter('numbers-17-18-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-17-18-20-21')} onClick={(e) => props.addBet(e, 'numbers-17-18-20-21')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-14-17')}  onMouseLeave={() => handleMouseLeave('numbers-14-17')} onClick={(e) => props.addBet(e, 'numbers-14-17')}></div>
								<div id='numbers-17' onMouseEnter={() => handleMouseEnter('numbers-17')}  onMouseLeave={() => handleMouseLeave('numbers-17')} onClick={(e) => props.addBet(e, 'numbers-17')}></div>
								<div id='numbers-17-20' onMouseEnter={() => handleMouseEnter('numbers-17-20')}  onMouseLeave={() => handleMouseLeave('numbers-17-20')} onClick={(e) => props.addBet(e, 'numbers-17-20')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-16-17')} onClick={(e) => props.addBet(e, 'numbers-13-14-16-17')}></div>
								<div id='numbers-16-17' onMouseEnter={() => handleMouseEnter('numbers-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-16-17')} onClick={(e) => props.addBet(e, 'numbers-16-17')}></div>
								<div id='numbers-16-17-19-20' onMouseEnter={() => handleMouseEnter('numbers-16-17-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-19-20')} onClick={(e) => props.addBet(e, 'numbers-16-17-19-20')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_20}>
							<span>20</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-17-18-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-17-18-20-21')} onClick={(e) => props.addBet(e, 'numbers-17-18-20-21')}></div>
								<div id='numbers-20-21' onMouseEnter={() => handleMouseEnter('numbers-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-20-21')} onClick={(e) => props.addBet(e, 'numbers-20-21')}></div>
								<div id='numbers-20-21-23-24' onMouseEnter={() => handleMouseEnter('numbers-20-21-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-20-21-23-24')} onClick={(e) => props.addBet(e, 'numbers-20-21-23-24')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-17-20')}  onMouseLeave={() => handleMouseLeave('numbers-17-20')} onClick={(e) => props.addBet(e, 'numbers-17-20')}></div>
								<div id='numbers-20' onMouseEnter={() => handleMouseEnter('numbers-20')}  onMouseLeave={() => handleMouseLeave('numbers-20')} onClick={(e) => props.addBet(e, 'numbers-20')}></div>
								<div id='numbers-20-23' onMouseEnter={() => handleMouseEnter('numbers-20-23')}  onMouseLeave={() => handleMouseLeave('numbers-20-23')} onClick={(e) => props.addBet(e, 'numbers-20-23')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-19-20')} onClick={(e) => props.addBet(e, 'numbers-16-17-19-20')}></div>
								<div id='numbers-19-20' onMouseEnter={() => handleMouseEnter('numbers-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-19-20')} onClick={(e) => props.addBet(e, 'numbers-19-20')}></div>
								<div id='numbers-19-20-22-23' onMouseEnter={() => handleMouseEnter('numbers-19-20-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-22-23')} onClick={(e) => props.addBet(e, 'numbers-19-20-22-23')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_23}>
							<span>23</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-20-21-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-20-21-23-24')} onClick={(e) => props.addBet(e, 'numbers-20-21-23-24')}></div>
								<div id='numbers-23-24' onMouseEnter={() => handleMouseEnter('numbers-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-23-24')} onClick={(e) => props.addBet(e, 'numbers-23-24')}></div>
								<div id='numbers-23-24-26-27' onMouseEnter={() => handleMouseEnter('numbers-23-24-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-23-24-26-27')} onClick={(e) => props.addBet(e, 'numbers-23-24-26-27')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-20-23')}  onMouseLeave={() => handleMouseLeave('numbers-20-23')} onClick={(e) => props.addBet(e, 'numbers-20-23')}></div>
								<div id='numbers-23' onMouseEnter={() => handleMouseEnter('numbers-23')}  onMouseLeave={() => handleMouseLeave('numbers-23')} onClick={(e) => props.addBet(e, 'numbers-23')}></div>
								<div id='numbers-23-26' onMouseEnter={() => handleMouseEnter('numbers-23-26')}  onMouseLeave={() => handleMouseLeave('numbers-23-26')} onClick={(e) => props.addBet(e, 'numbers-23-26')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-22-23')} onClick={(e) => props.addBet(e, 'numbers-19-20-22-23')}></div>
								<div id='numbers-22-23' onMouseEnter={() => handleMouseEnter('numbers-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-22-23')} onClick={(e) => props.addBet(e, 'numbers-22-23')}></div>
								<div id='numbers-22-23-25-26' onMouseEnter={() => handleMouseEnter('numbers-22-23-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-25-26')} onClick={(e) => props.addBet(e, 'numbers-22-23-25-26')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_26}>
							<span>26</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-23-24-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-23-24-26-27')} onClick={(e) => props.addBet(e, 'numbers-23-24-26-27')}></div>
								<div id='numbers-26-27' onMouseEnter={() => handleMouseEnter('numbers-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-26-27')} onClick={(e) => props.addBet(e, 'numbers-26-27')}></div>
								<div id='numbers-26-27-29-30' onMouseEnter={() => handleMouseEnter('numbers-26-27-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-26-27-29-30')} onClick={(e) => props.addBet(e, 'numbers-26-27-29-30')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-23-26')}  onMouseLeave={() => handleMouseLeave('numbers-23-26')} onClick={(e) => props.addBet(e, 'numbers-23-26')}></div>
								<div id='numbers-26' onMouseEnter={() => handleMouseEnter('numbers-26')}  onMouseLeave={() => handleMouseLeave('numbers-26')} onClick={(e) => props.addBet(e, 'numbers-26')}></div>
								<div id='numbers-26-29' onMouseEnter={() => handleMouseEnter('numbers-26-29')}  onMouseLeave={() => handleMouseLeave('numbers-26-29')} onClick={(e) => props.addBet(e, 'numbers-26-29')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-25-26')} onClick={(e) => props.addBet(e, 'numbers-22-23-25-26')}></div>
								<div id='numbers-25-26' onMouseEnter={() => handleMouseEnter('numbers-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-25-26')} onClick={(e) => props.addBet(e, 'numbers-25-26')}></div>
								<div id='numbers-25-26-28-29' onMouseEnter={() => handleMouseEnter('numbers-25-26-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-28-29')} onClick={(e) => props.addBet(e, 'numbers-25-26-28-29')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_29}>
							<span>29</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-26-27-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-26-27-29-30')} onClick={(e) => props.addBet(e, 'numbers-26-27-29-30')}></div>
								<div id='numbers-29-30' onMouseEnter={() => handleMouseEnter('numbers-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-29-30')} onClick={(e) => props.addBet(e, 'numbers-29-30')}></div>
								<div id='numbers-29-30-32-33' onMouseEnter={() => handleMouseEnter('numbers-29-30-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-29-30-32-33')} onClick={(e) => props.addBet(e, 'numbers-29-30-32-33')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-26-29')}  onMouseLeave={() => handleMouseLeave('numbers-26-29')} onClick={(e) => props.addBet(e, 'numbers-26-29')}></div>
								<div id='numbers-29' onMouseEnter={() => handleMouseEnter('numbers-29')}  onMouseLeave={() => handleMouseLeave('numbers-29')} onClick={(e) => props.addBet(e, 'numbers-29')}></div>
								<div id='numbers-29-32' onMouseEnter={() => handleMouseEnter('numbers-29-32')}  onMouseLeave={() => handleMouseLeave('numbers-29-32')} onClick={(e) => props.addBet(e, 'numbers-29-32')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-28-29')} onClick={(e) => props.addBet(e, 'numbers-25-26-28-29')}></div>
								<div id='numbers-28-29' onMouseEnter={() => handleMouseEnter('numbers-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-28-29')} onClick={(e) => props.addBet(e, 'numbers-28-29')}></div>
								<div id='numbers-28-29-31-32' onMouseEnter={() => handleMouseEnter('numbers-28-29-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-31-32')} onClick={(e) => props.addBet(e, 'numbers-28-29-31-32')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_32}>
							<span>32</span>
							<div className={styles.middle}>
								<div onMouseEnter={() => handleMouseEnter('numbers-29-30-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-29-30-32-33')} onClick={(e) => props.addBet(e, 'numbers-29-30-32-33')}></div>
								<div id='numbers-32-33' onMouseEnter={() => handleMouseEnter('numbers-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-32-33')} onClick={(e) => props.addBet(e, 'numbers-32-33')}></div>
								<div id='numbers-32-33-35-36' onMouseEnter={() => handleMouseEnter('numbers-32-33-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-32-33-35-36')} onClick={(e) => props.addBet(e, 'numbers-32-33-35-36')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-29-32')}  onMouseLeave={() => handleMouseLeave('numbers-29-32')} onClick={(e) => props.addBet(e, 'numbers-29-32')}></div>
								<div id='numbers-32' onMouseEnter={() => handleMouseEnter('numbers-32')}  onMouseLeave={() => handleMouseLeave('numbers-32')} onClick={(e) => props.addBet(e, 'numbers-32')}></div>
								<div id='numbers-32-35' onMouseEnter={() => handleMouseEnter('numbers-32-35')}  onMouseLeave={() => handleMouseLeave('numbers-32-35')} onClick={(e) => props.addBet(e, 'numbers-32-35')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-31-32')} onClick={(e) => props.addBet(e, 'numbers-28-29-31-32')}></div>
								<div id='numbers-31-32' onMouseEnter={() => handleMouseEnter('numbers-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-31-32')} onClick={(e) => props.addBet(e, 'numbers-31-32')}></div>
								<div id='numbers-31-32-34-35' onMouseEnter={() => handleMouseEnter('numbers-31-32-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-34-35')} onClick={(e) => props.addBet(e, 'numbers-31-32-34-35')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_35}>
							<span>35</span>
							<div className={styles.middleRight}>
								<div onMouseEnter={() => handleMouseEnter('numbers-32-33-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-32-33-35-36')} onClick={(e) => props.addBet(e, 'numbers-32-33-35-36')}></div>
								<div id='numbers-35-36' onMouseEnter={() => handleMouseEnter('numbers-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-35-36')} onClick={(e) => props.addBet(e, 'numbers-35-36')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-32-35')}  onMouseLeave={() => handleMouseLeave('numbers-32-35')} onClick={(e) => props.addBet(e, 'numbers-32-35')}></div>
								<div id='numbers-35' onMouseEnter={() => handleMouseEnter('numbers-35')}  onMouseLeave={() => handleMouseLeave('numbers-35')} onClick={(e) => props.addBet(e, 'numbers-35')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-34-35')} onClick={(e) => props.addBet(e, 'numbers-31-32-34-35')}></div>
								<div id='numbers-34-35' onMouseEnter={() => handleMouseEnter('numbers-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-34-35')} onClick={(e) => props.addBet(e, 'numbers-34-35')}></div>
							</div>
						</td>
				        <td id='column-2' className={styles.sector} onMouseEnter={() => handleMouseEnter('col2')}  onMouseLeave={() => handleMouseLeave('col2')} onClick={(e) => props.addBet(e, 'column-2')}><span className={styles.vt}>2 to 1</span></td>
				    </tr>
				    <tr className={styles.nums}>
				        <td className={styles.hidden}></td>
				        <td className={`${styles.num} ${styles.red}`} ref={_1}>
							<span>1</span>
							<div className={styles.bottomLeft}>
								<div onMouseEnter={() => handleMouseEnter('numbers-0-1-2')}  onMouseLeave={() => handleMouseLeave('numbers-0-1-2')} onClick={(e) => props.addBet(e, 'numbers-0-1-2')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2')}  onMouseLeave={() => handleMouseLeave('numbers-1-2')} onClick={(e) => props.addBet(e, 'numbers-1-2')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-4-5')} onClick={(e) => props.addBet(e, 'numbers-1-2-4-5')}></div>
								<div id='numbers-0-1' onMouseEnter={() => handleMouseEnter('numbers-0-1')}  onMouseLeave={() => handleMouseLeave('numbers-0-1')} onClick={(e) => props.addBet(e, 'numbers-0-1')}></div>
								<div id='numbers-1' onMouseEnter={() => handleMouseEnter('numbers-1')}  onMouseLeave={() => handleMouseLeave('numbers-1')} onClick={(e) => props.addBet(e, 'numbers-1')}></div>
								<div id='numbers-1-4' onMouseEnter={() => handleMouseEnter('numbers-1-4')}  onMouseLeave={() => handleMouseLeave('numbers-1-4')} onClick={(e) => props.addBet(e, 'numbers-1-4')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-0-1-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-0-1-2-3')} onClick={(e) => props.addBet(e, 'numbers-0-1-2-3')}></div>
								<div id='numbers-1-2-3' onMouseEnter={() => handleMouseEnter('numbers-1-2-3')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-3')} onClick={(e) => props.addBet(e, 'numbers-1-2-3')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2-3-4-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-3-4-5-6')} onClick={(e) => props.addBet(e, 'numbers-1-2-3-4-5-6')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_4}>
							<span>4</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-4-5')} onClick={(e) => props.addBet(e, 'numbers-1-2-4-5')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5')}  onMouseLeave={() => handleMouseLeave('numbers-4-5')} onClick={(e) => props.addBet(e, 'numbers-4-5')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-7-8')} onClick={(e) => props.addBet(e, 'numbers-4-5-7-8')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-4')}  onMouseLeave={() => handleMouseLeave('numbers-1-4')} onClick={(e) => props.addBet(e, 'numbers-1-4')}></div>
								<div id='numbers-4' onMouseEnter={() => handleMouseEnter('numbers-4')}  onMouseLeave={() => handleMouseLeave('numbers-4')} onClick={(e) => props.addBet(e, 'numbers-4')}></div>
								<div id='numbers-4-7' onMouseEnter={() => handleMouseEnter('numbers-4-7')}  onMouseLeave={() => handleMouseLeave('numbers-4-7')} onClick={(e) => props.addBet(e, 'numbers-4-7')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-1-2-3-4-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-1-2-3-4-5-6')} onClick={(e) => props.addBet(e, 'numbers-1-2-3-4-5-6')}></div>
								<div id='numbers-4-5-6' onMouseEnter={() => handleMouseEnter('numbers-4-5-6')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-6')} onClick={(e) => props.addBet(e, 'numbers-4-5-6')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5-6-7-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-6-7-8-9')} onClick={(e) => props.addBet(e, 'numbers-4-5-6-7-8-9')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_7}>
							<span>7</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-7-8')} onClick={(e) => props.addBet(e, 'numbers-4-5-7-8')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8')}  onMouseLeave={() => handleMouseLeave('numbers-7-8')} onClick={(e) => props.addBet(e, 'numbers-7-8')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-10-11')} onClick={(e) => props.addBet(e, 'numbers-7-8-10-11')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-7')}  onMouseLeave={() => handleMouseLeave('numbers-4-7')} onClick={(e) => props.addBet(e, 'numbers-4-7')}></div>
								<div id='numbers-7' onMouseEnter={() => handleMouseEnter('numbers-7')}  onMouseLeave={() => handleMouseLeave('numbers-7')} onClick={(e) => props.addBet(e, 'numbers-7')}></div>
								<div id='numbers-7-10' onMouseEnter={() => handleMouseEnter('numbers-7-10')}  onMouseLeave={() => handleMouseLeave('numbers-7-10')} onClick={(e) => props.addBet(e, 'numbers-7-10')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-4-5-6-7-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-4-5-6-7-8-9')} onClick={(e) => props.addBet(e, 'numbers-4-5-6-7-8-9')}></div>
								<div id='numbers-7-8-9' onMouseEnter={() => handleMouseEnter('numbers-7-8-9')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-9')} onClick={(e) => props.addBet(e, 'numbers-7-8-9')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8-9-10-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-9-10-11-12')} onClick={(e) => props.addBet(e, 'numbers-7-8-9-10-11-12')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_10}>
							<span>10</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-10-11')} onClick={(e) => props.addBet(e, 'numbers-7-8-10-11')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11')}  onMouseLeave={() => handleMouseLeave('numbers-10-11')} onClick={(e) => props.addBet(e, 'numbers-10-11')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-13-14')} onClick={(e) => props.addBet(e, 'numbers-10-11-13-14')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-10')}  onMouseLeave={() => handleMouseLeave('numbers-7-10')} onClick={(e) => props.addBet(e, 'numbers-7-10')}></div>
								<div id='numbers-10' onMouseEnter={() => handleMouseEnter('numbers-10')}  onMouseLeave={() => handleMouseLeave('numbers-10')} onClick={(e) => props.addBet(e, 'numbers-10')}></div>
								<div id='numbers-10-13' onMouseEnter={() => handleMouseEnter('numbers-10-13')}  onMouseLeave={() => handleMouseLeave('numbers-10-13')} onClick={(e) => props.addBet(e, 'numbers-10-13')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-7-8-9-10-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-7-8-9-10-11-12')} onClick={(e) => props.addBet(e, 'numbers-7-8-9-10-11-12')}></div>
								<div id='numbers-10-11-12' onMouseEnter={() => handleMouseEnter('numbers-10-11-12')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-12')} onClick={(e) => props.addBet(e, 'numbers-10-11-12')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11-12-13-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-12-13-14-15')} onClick={(e) => props.addBet(e, 'numbers-10-11-12-13-14-15')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_13}>
							<span>13</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-13-14')} onClick={(e) => props.addBet(e, 'numbers-10-11-13-14')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14')}  onMouseLeave={() => handleMouseLeave('numbers-13-14')} onClick={(e) => props.addBet(e, 'numbers-13-14')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-16-17')} onClick={(e) => props.addBet(e, 'numbers-13-14-16-17')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-13')}  onMouseLeave={() => handleMouseLeave('numbers-10-13')} onClick={(e) => props.addBet(e, 'numbers-10-13')}></div>
								<div id='numbers-13' onMouseEnter={() => handleMouseEnter('numbers-13')}  onMouseLeave={() => handleMouseLeave('numbers-13')} onClick={(e) => props.addBet(e, 'numbers-13')}></div>
								<div id='numbers-13-16' onMouseEnter={() => handleMouseEnter('numbers-13-16')}  onMouseLeave={() => handleMouseLeave('numbers-13-16')} onClick={(e) => props.addBet(e, 'numbers-13-16')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-10-11-12-13-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-10-11-12-13-14-15')} onClick={(e) => props.addBet(e, 'numbers-10-11-12-13-14-15')}></div>
								<div id='numbers-13-14-15' onMouseEnter={() => handleMouseEnter('numbers-13-14-15')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-15')} onClick={(e) => props.addBet(e, 'numbers-13-14-15')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14-15-16-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-15-16-17-18')} onClick={(e) => props.addBet(e, 'numbers-13-14-15-16-17-18')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_16}>
							<span>16</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-16-17')} onClick={(e) => props.addBet(e, 'numbers-13-14-16-17')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17')}  onMouseLeave={() => handleMouseLeave('numbers-16-17')} onClick={(e) => props.addBet(e, 'numbers-16-17')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-19-20')} onClick={(e) => props.addBet(e, 'numbers-16-17-19-20')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-16')}  onMouseLeave={() => handleMouseLeave('numbers-13-16')} onClick={(e) => props.addBet(e, 'numbers-13-16')}></div>
								<div id='numbers-16' onMouseEnter={() => handleMouseEnter('numbers-16')}  onMouseLeave={() => handleMouseLeave('numbers-16')} onClick={(e) => props.addBet(e, 'numbers-16')}></div>
								<div id='numbers-16-19' onMouseEnter={() => handleMouseEnter('numbers-16-19')}  onMouseLeave={() => handleMouseLeave('numbers-16-19')} onClick={(e) => props.addBet(e, 'numbers-16-19')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-13-14-15-16-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-13-14-15-16-17-18')} onClick={(e) => props.addBet(e, 'numbers-13-14-15-16-17-18')}></div>
								<div id='numbers-16-17-18' onMouseEnter={() => handleMouseEnter('numbers-16-17-18')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-18')} onClick={(e) => props.addBet(e, 'numbers-16-17-18')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17-18-19-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-18-19-20-21')} onClick={(e) => props.addBet(e, 'numbers-16-17-18-19-20-21')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_19}>
							<span>19</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-19-20')} onClick={(e) => props.addBet(e, 'numbers-16-17-19-20')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20')}  onMouseLeave={() => handleMouseLeave('numbers-19-20')} onClick={(e) => props.addBet(e, 'numbers-19-20')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-22-23')} onClick={(e) => props.addBet(e, 'numbers-19-20-22-23')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-19')}  onMouseLeave={() => handleMouseLeave('numbers-16-19')} onClick={(e) => props.addBet(e, 'numbers-16-19')}></div>
								<div id='numbers-19' onMouseEnter={() => handleMouseEnter('numbers-19')}  onMouseLeave={() => handleMouseLeave('numbers-19')} onClick={(e) => props.addBet(e, 'numbers-19')}></div>
								<div id='numbers-19-22' onMouseEnter={() => handleMouseEnter('numbers-19-22')}  onMouseLeave={() => handleMouseLeave('numbers-19-22')} onClick={(e) => props.addBet(e, 'numbers-19-22')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-16-17-18-19-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-16-17-18-19-20-21')} onClick={(e) => props.addBet(e, 'numbers-16-17-18-19-20-21')}></div>
								<div id='numbers-19-20-21' onMouseEnter={() => handleMouseEnter('numbers-19-20-21')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-21')} onClick={(e) => props.addBet(e, 'numbers-19-20-21')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20-21-22-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-21-22-23-24')} onClick={(e) => props.addBet(e, 'numbers-19-20-21-22-23-24')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_22}>
							<span>22</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-22-23')} onClick={(e) => props.addBet(e, 'numbers-19-20-22-23')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23')}  onMouseLeave={() => handleMouseLeave('numbers-22-23')} onClick={(e) => props.addBet(e, 'numbers-22-23')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-25-26')} onClick={(e) => props.addBet(e, 'numbers-22-23-25-26')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-22')}  onMouseLeave={() => handleMouseLeave('numbers-19-22')} onClick={(e) => props.addBet(e, 'numbers-19-22')}></div>
								<div id='numbers-22' onMouseEnter={() => handleMouseEnter('numbers-22')}  onMouseLeave={() => handleMouseLeave('numbers-22')} onClick={(e) => props.addBet(e, 'numbers-22')}></div>
								<div id='numbers-22-25' onMouseEnter={() => handleMouseEnter('numbers-22-25')}  onMouseLeave={() => handleMouseLeave('numbers-22-25')} onClick={(e) => props.addBet(e, 'numbers-22-25')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-19-20-21-22-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-19-20-21-22-23-24')} onClick={(e) => props.addBet(e, 'numbers-19-20-21-22-23-24')}></div>
								<div id='numbers-22-23-24' onMouseEnter={() => handleMouseEnter('numbers-22-23-24')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-24')} onClick={(e) => props.addBet(e, 'numbers-22-23-24')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23-24-25-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-24-25-26-27')} onClick={(e) => props.addBet(e, 'numbers-22-23-24-25-26-27')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_25}>
							<span>25</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-25-26')} onClick={(e) => props.addBet(e, 'numbers-22-23-25-26')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26')}  onMouseLeave={() => handleMouseLeave('numbers-25-26')} onClick={(e) => props.addBet(e, 'numbers-25-26')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-28-29')} onClick={(e) => props.addBet(e, 'numbers-25-26-28-29')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-25')}  onMouseLeave={() => handleMouseLeave('numbers-22-25')} onClick={(e) => props.addBet(e, 'numbers-22-25')}></div>
								<div id='numbers-25' onMouseEnter={() => handleMouseEnter('numbers-25')}  onMouseLeave={() => handleMouseLeave('numbers-25')} onClick={(e) => props.addBet(e, 'numbers-25')}></div>
								<div id='numbers-25-28' onMouseEnter={() => handleMouseEnter('numbers-25-28')}  onMouseLeave={() => handleMouseLeave('numbers-25-28')} onClick={(e) => props.addBet(e, 'numbers-25-28')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-22-23-24-25-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-22-23-24-25-26-27')} onClick={(e) => props.addBet(e, 'numbers-22-23-24-25-26-27')}></div>
								<div id='numbers-25-26-27' onMouseEnter={() => handleMouseEnter('numbers-25-26-27')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-27')} onClick={(e) => props.addBet(e, 'numbers-25-26-27')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26-27-28-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-27-28-29-30')} onClick={(e) => props.addBet(e, 'numbers-25-26-27-28-29-30')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_28}>
							<span>28</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-28-29')} onClick={(e) => props.addBet(e, 'numbers-25-26-28-29')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29')}  onMouseLeave={() => handleMouseLeave('numbers-28-29')} onClick={(e) => props.addBet(e, 'numbers-28-29')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-31-32')} onClick={(e) => props.addBet(e, 'numbers-28-29-31-32')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-28')}  onMouseLeave={() => handleMouseLeave('numbers-25-28')} onClick={(e) => props.addBet(e, 'numbers-25-28')}></div>
								<div id='numbers-28' onMouseEnter={() => handleMouseEnter('numbers-28')}  onMouseLeave={() => handleMouseLeave('numbers-28')} onClick={(e) => props.addBet(e, 'numbers-28')}></div>
								<div id='numbers-28-31' onMouseEnter={() => handleMouseEnter('numbers-28-31')}  onMouseLeave={() => handleMouseLeave('numbers-28-31')} onClick={(e) => props.addBet(e, 'numbers-28-31')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-25-26-27-28-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-25-26-27-28-29-30')} onClick={(e) => props.addBet(e, 'numbers-25-26-27-28-29-30')}></div>
								<div id='numbers-28-29-30' onMouseEnter={() => handleMouseEnter('numbers-28-29-30')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-30')} onClick={(e) => props.addBet(e, 'numbers-28-29-30')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29-30-31-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-30-31-32-33')} onClick={(e) => props.addBet(e, 'numbers-28-29-30-31-32-33')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.black}`} ref={_31}>
							<span>31</span>
							<div className={styles.bottom}>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-31-32')} onClick={(e) => props.addBet(e, 'numbers-28-29-31-32')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32')}  onMouseLeave={() => handleMouseLeave('numbers-31-32')} onClick={(e) => props.addBet(e, 'numbers-31-32')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-34-35')} onClick={(e) => props.addBet(e, 'numbers-31-32-34-35')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-31')}  onMouseLeave={() => handleMouseLeave('numbers-28-31')} onClick={(e) => props.addBet(e, 'numbers-28-31')}></div>
								<div id='numbers-31' onMouseEnter={() => handleMouseEnter('numbers-31')}  onMouseLeave={() => handleMouseLeave('numbers-31')} onClick={(e) => props.addBet(e, 'numbers-31')}></div>
								<div id='numbers-31-34' onMouseEnter={() => handleMouseEnter('numbers-31-34')}  onMouseLeave={() => handleMouseLeave('numbers-31-34')} onClick={(e) => props.addBet(e, 'numbers-31-34')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-28-29-30-31-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-28-29-30-31-32-33')} onClick={(e) => props.addBet(e, 'numbers-28-29-30-31-32-33')}></div>
								<div id='numbers-31-32-33' onMouseEnter={() => handleMouseEnter('numbers-31-32-33')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-33')} onClick={(e) => props.addBet(e, 'numbers-31-32-33')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32-33-34-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-33-34-35-36')} onClick={(e) => props.addBet(e, 'numbers-31-32-33-34-35-36')}></div>
							</div>
						</td>
				        <td className={`${styles.num} ${styles.red}`} ref={_34}>
							<span>34</span>
							<div className={styles.bottomRight}>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-34-35')} onClick={(e) => props.addBet(e, 'numbers-31-32-34-35')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-34-35')}  onMouseLeave={() => handleMouseLeave('numbers-34-35')} onClick={(e) => props.addBet(e, 'numbers-34-35')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-34')}  onMouseLeave={() => handleMouseLeave('numbers-31-34')} onClick={(e) => props.addBet(e, 'numbers-31-34')}></div>
								<div id='numbers-34' onMouseEnter={() => handleMouseEnter('numbers-34')}  onMouseLeave={() => handleMouseLeave('numbers-34')} onClick={(e) => props.addBet(e, 'numbers-34')}></div>
								<div onMouseEnter={() => handleMouseEnter('numbers-31-32-33-34-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-31-32-33-34-35-36')} onClick={(e) => props.addBet(e, 'numbers-31-32-33-34-35-36')}></div>
								<div id='numbers-34-35-36' onMouseEnter={() => handleMouseEnter('numbers-34-35-36')}  onMouseLeave={() => handleMouseLeave('numbers-34-35-36')} onClick={(e) => props.addBet(e, 'numbers-34-35-36')}></div>
							</div>
						</td>
				        <td id='column-1' className={styles.sector} onMouseEnter={() => handleMouseEnter('col1')}  onMouseLeave={() => handleMouseLeave('col1')} onClick={(e) => props.addBet(e, 'column-1')}><span className={styles.vt}>2 to 1</span></td>
				    </tr>
            	    <tr>
				        <td className={styles.empty}></td>
				        <td id='dozen-1' colSpan="4" className={styles.sector} onMouseEnter={() => handleMouseEnter('1st12')}  onMouseLeave={() => handleMouseLeave('1st12')} onClick={(e) => props.addBet(e, 'dozen-1')}>1st 12</td>
				        <td id='dozen-2' colSpan="4" className={styles.sector} onMouseEnter={() => handleMouseEnter('2nd12')}  onMouseLeave={() => handleMouseLeave('2nd12')} onClick={(e) => props.addBet(e, 'dozen-2')}>2nd 12</td>
				        <td id='dozen-3' colSpan="4" className={styles.sector} onMouseEnter={() => handleMouseEnter('3rd12')}  onMouseLeave={() => handleMouseLeave('3rd12')} onClick={(e) => props.addBet(e, 'dozen-3')}>3rd 12</td>
				        <td className={styles.empty}></td>
				    </tr>
            	    <tr>
				        <td className={styles.empty}></td>
				        <td id='lowhigh-low' colSpan="2" className={styles.sector} onMouseEnter={() => handleMouseEnter('low')}  onMouseLeave={() => handleMouseLeave('low')} onClick={(e) => props.addBet(e, 'lowhigh-low')}>1 to 18</td>
				        <td id='oddeven-even' colSpan="2" className={styles.sector} onMouseEnter={() => handleMouseEnter('even')}  onMouseLeave={() => handleMouseLeave('even')} onClick={(e) => props.addBet(e, 'oddeven-even')}>EVEN</td>
				        <td id='color-red' colSpan="2" className={`${styles.sector} ${styles.red}`} onMouseEnter={() => handleMouseEnter('red')}  onMouseLeave={() => handleMouseLeave('red')} onClick={(e) => props.addBet(e, 'color-red')}>RED</td>
				        <td id='color-black' colSpan="2" className={`${styles.sector} ${styles.black}`} onMouseEnter={() => handleMouseEnter('black')}  onMouseLeave={() => handleMouseLeave('black')} onClick={(e) => props.addBet(e, 'color-black')}>BLACK</td>
				        <td id='oddeven-odd' colSpan="2" className={styles.sector} onMouseEnter={() => handleMouseEnter('odd')}  onMouseLeave={() => handleMouseLeave('odd')} onClick={(e) => props.addBet(e, 'oddeven-odd')}>ODD</td>
				        <td id='lowhigh-high' colSpan="2" className={styles.sector} onMouseEnter={() => handleMouseEnter('high')}  onMouseLeave={() => handleMouseLeave('high')} onClick={(e) => props.addBet(e, 'lowhigh-high')}>19 to 36</td>
				        <td className={styles.empty}></td>
				    </tr>
            	</tbody>
			</table>
        </>
    )
}

export default TableLayout
