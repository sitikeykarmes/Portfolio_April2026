import React, { useState, useEffect } from 'react';
import { FaTimes, FaLock, FaUnlock, FaCheckCircle } from 'react-icons/fa';
import { RESUME_QUESTIONS } from '../constants';

const getRandomQuestions = (n) => {
  const shuffled = [...RESUME_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const ResumeModal = ({ isOpen, onClose, onUnlock }) => {
  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('Answer 2 questions to unlock!');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setQueue(getRandomQuestions(2));
      setCurrentIndex(0);
      setScore(0);
      setMessage('Answer 2 questions to unlock my resume!');
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAnswer = (selectedOption) => {
    if (isAnimating) return;

    const currentQ = queue[currentIndex];
    let newScore = score;
    if (selectedOption === currentQ.answer) {
      newScore += 1;
    }

    setIsAnimating(true);

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < queue.length) {
        setScore(newScore);
        setCurrentIndex(nextIndex);
      } else {
        // End of queue
        if (newScore === queue.length) {
          setIsSuccess(true);
        } else {
          // Failed some
          const wrongCount = queue.length - newScore;
          const qWord = wrongCount === 1 ? 'question' : 'questions';
          setMessage(`Oops! You got ${wrongCount} wrong. Try ${wrongCount} new ${qWord} to proceed.`);
          setQueue(getRandomQuestions(wrongCount));
          setCurrentIndex(0);
          setScore(0);
        }
      }
      setIsAnimating(false);
    }, 400); // Small delay for transition feel
  };

  const currentQ = queue[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2"
        >
          <FaTimes size={20} />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-6 animate-in zoom-in duration-500">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center relative text-green-400">
                <FaUnlock size={36} className="animate-bounce" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
              Access Granted!
            </h2>
            <p className="text-green-400 text-center text-lg mb-8">
              You have successfully unlocked my resume.
            </p>
            <button
              onClick={onUnlock}
              className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ease-out border border-transparent flex items-center justify-center gap-3 w-full max-w-xs"
            >
              <FaCheckCircle size={20} />
              View Resume Now
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4 border border-accent/30">
                <FaLock size={20} />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 text-center">
                Resume Locked
              </h2>
              <p className="text-white/70 text-center text-sm md:text-base font-medium min-h-[40px]">
                {message}
              </p>
            </div>

            {currentQ && (
              <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-white text-lg font-medium mb-6">
                  <span className="text-accent mr-2">Q{currentIndex + 1}.</span>
                  {currentQ.question}
                </p>

                <div className="space-y-3">
                  {currentQ.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={isAnimating}
                      className="w-full text-left px-5 py-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/90 transition-all active:scale-[0.98]"
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between items-center text-xs text-white/40 uppercase tracking-widest font-semibold">
                  <span>Question {currentIndex + 1} of {queue.length}</span>
                  <span>Need {queue.length} correct</span>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ResumeModal;
