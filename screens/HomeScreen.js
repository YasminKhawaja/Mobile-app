const HomeScreen = ({navigation}) => {};

export default HomeScreen;
<ProductCard
title=""
description=""
price=""
image= {require("../assets/image.jpg")}
onPress={()=>
    navigation.navigate("Details",
        title:"",
        description:"",
        price:"", 
        image: require("../assets/image.jpg"),
    )}

/>

</PrductCard>