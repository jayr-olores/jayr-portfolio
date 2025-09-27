function BackgroundBlobs({ blobs }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${blob.animation}`}
          style={{
            width: blob.size,
            height: blob.size,
            backgroundColor: blob.color,
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        ></div>
      ))}
    </div>
  );
}

export default BackgroundBlobs;
