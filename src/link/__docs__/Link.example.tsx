import VertexDesignThemeProvider from '../../provider/VertexDesignThemeProvider';
import Link from '../Link';

const LinkExample = () => {
    return (
        <VertexDesignThemeProvider>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <p>
                    Hello, this is a <Link href="">link</Link>.
                </p>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <p>
                    <Link href="#hello">Hello, this is a very long link!</Link>
                </p>
            </div>
        </VertexDesignThemeProvider>
    );
};

export default LinkExample;
