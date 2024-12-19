import React from 'react'
import Button from '../../base-components/Button'
import LoadingIcon from '../../base-components/LoadingIcon';

const buttonAbsen = (props : any) => {
    const {name, 
        nameButton1, 
        nameButton2,
        idButton1,
        idButton2, 
        actionButton1, 
        actionButton2,
        isView,
        isLoading
    } = props;

    return (
        <div className={`p-4 box ${isView ? '' : 'hidden'}`}>
            <div>
                <p className=' border-b mb-4'>{name}</p>
            </div>
            <div className='flex justify-between'>
                <Button 
                    variant="primary" 
                    size='sm'
                    className='w-2/5 px-2'
                    onClick={()=>actionButton1(idButton1)}
                    >
                    {isLoading ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : nameButton1}
                </Button>
                <Button 
                    variant="primary" 
                    size='sm'
                    className='w-2/5'
                    onClick={()=>actionButton2(idButton2)}
                    >
                    {isLoading ? <LoadingIcon icon="circles" className="w-4 h4" color="white"  /> : nameButton2}
                </Button>
            </div>
        </div>
  )
}

export default buttonAbsen;