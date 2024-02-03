import React from 'react'
import "./Onboarding.scss"
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import Signin from '../../atoms/Signin/Signin'
export default function OnboardingRight() {
  return (
    <>
    <div className='onboarding-right'>
        <Text variant='heading'>
        Register Your Account
        </Text>
        <div className='auth-section'>
            <div className='checkbox-container'>
                <input type='checkbox' className='checkbox-round' checked />
                <Text variant="normal" >
                    I Represent a Brand
                </Text>
            </div>
           
            <Button variant='primary' className="continue-btn">
                    Continue
            </Button>
          
        </div>
        <div className='onboarding-footer'>
                <Text variant="secondary">
                     Already a member?
                </Text>
                <Signin/>
            </div>
    </div>
        </>
  )
}
