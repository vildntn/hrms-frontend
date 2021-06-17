import React from 'react'
import { Dropdown, Menu , Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
            <Image avatar spaced="right" src="http://www.gebzemimarlarodasi.org/wp-content/uploads/elementor/thumbs/blank-profile-picture-973460_640-ovcxa0hxfxkvb787wc9x0i2f6ptmw2vr9bn77ig0n4.png"/>
                <Dropdown pointing="top left" text="Vildan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim " icon="info" />
                        <Dropdown.Item onClick={signOut} text="Sign out " icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
