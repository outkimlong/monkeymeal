import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

    const OnboardingScreen = ({ navigation }) => {
        return(
            <Onboarding
                onSkip={() => navigation.replace('SignInScreen')}
                onDone={() => navigation.navigate('SignInScreen')}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/onboarding/onboarding1.png')} />,
                        title: 'Find Food You Love',
                        subtitle: 'Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/onboarding/onboarding2.png')} />,
                        title: 'Fast Delivery',
                        subtitle: 'Fast food delivery to your home, office wherever you are',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../../assets/onboarding/onboarding3.png')} />,
                        title: 'Find Food You Love',
                        subtitle: 'Real time tracking of your food on the app once you placed the order',
                    },
                ]}
            />
        )
    };
    export { OnboardingScreen };