import React from 'react';
import { Bateria, Composer } from './styles';
import ReactAudioPlayer from 'react-audio-player';

const Dashboard: React.FC = () => {
    document.body.addEventListener('keyup', event => {
        playSound(event.code.toLowerCase());
    });

    function playSound(sound: string): void {
        const audioElement = document.querySelector<HTMLAudioElement>(`#${sound}`);
        const keyElement = document.querySelector(`div[data-key=${sound}]`);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
        }

        if (keyElement) {
            keyElement.classList.add('active');

            setTimeout(() => {
                keyElement.classList.remove('active');
            }, 300);
        }
    }

    function playComposition(): void {
        const sound = document.querySelector('input')!.value;

        if (sound !== '') {
            const soundArray = sound.split('');

            let wait = 0;

            for (const soundItem of soundArray) {
                setTimeout(() => {
                    playSound(`key${soundItem}`);
                }, wait);

                wait += 250;
            }
        }
    }
    return (
        <>
            <Bateria>
                <div>
                    <div data-key="keyq">Q</div>
                    <div data-key="keyw">W</div>
                    <div data-key="keye">E</div>

                    <div data-key="keya">A</div>
                    <div data-key="keys">S</div>
                    <div data-key="keyd">D</div>

                    <div data-key="keyz">Z</div>
                    <div data-key="keyx">X</div>
                    <div data-key="keyc">C</div>
                </div>
            </Bateria>
            <Composer>
                <div>
                    <input type="text" placeholder="Faça uma composição..." />
                    <button onClick={playComposition}>Tocar</button>
                </div>
            </Composer>

            <ReactAudioPlayer src="sounds/keyq.wav" id="keyq" />
            <ReactAudioPlayer src="sounds/keyw.wav" id="keyw" />
            <ReactAudioPlayer src="sounds/keye.wav" id="keye" />
            <ReactAudioPlayer src="sounds/keya.wav" id="keya" />
            <ReactAudioPlayer src="sounds/keys.wav" id="keys" />
            <ReactAudioPlayer src="sounds/keyd.wav" id="keyd" />
            <ReactAudioPlayer src="sounds/keyz.wav" id="keyz" />
            <ReactAudioPlayer src="sounds/keyx.wav" id="keyx" />
            <ReactAudioPlayer src="sounds/keyc.wav" id="keyc" />
        </>
    );
};

export default Dashboard;
