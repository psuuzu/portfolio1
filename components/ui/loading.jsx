import style from "./loading.css"

export default function Loading() {
    return (
        <section className="scale-90">
            <div className="loader">
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            </div>
        </section>
    )
  }