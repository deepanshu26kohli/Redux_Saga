export const cartData = (data=[],action)=>{
    switch (action.type) {
       
           case "ADD_TO_CART":
            console.log("Addto cartData",action.data);
            return [...data,action.data]
            case "REMOVE_FROM_CART":
                console.log("Remove from cartData",data);
                let remainingData = data.filter((item)=>
                    item.id !== action.data
                )
                console.log("After Remove from cartData",remainingData);
            return [...remainingData]
            case "EMPTY_CART":
                data = []
            return [...data]
           default :
           return data
    }
}


