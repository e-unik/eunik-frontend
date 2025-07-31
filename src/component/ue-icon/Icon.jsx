import TelegramIconSvg from '../../img/tg_ico.svg?react';

function TelegramIcon({
    width='2em',
    height='2em'
}) {
    return (
         <TelegramIconSvg style={{ height, width, verticalAlign: 'middle' }} />
    )
}

export { TelegramIcon }