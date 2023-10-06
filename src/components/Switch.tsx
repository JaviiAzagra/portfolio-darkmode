import { useTheme } from "../hook/useTheme";

export const Switch = () => {
    
    const [theme, handleChange] = useTheme('dark');

    return (
        <div className="container-switch">
            <span></span>
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
    )
}