import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4D03AQFkjQMRuGmbRA/profile-displayphoto-shrink_800_800/0/1608464842895?e=1628726400&v=beta&t=6joK3tHUQXHHSJChoXEKyOZIsW05cEY_5nib53hcZu8"/>
                <Dropdown pointing="top left" text="Ayşe">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}